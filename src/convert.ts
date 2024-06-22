/// <reference path="./types.d.ts" />
import { ensureDir, emptyDir } from "@std/fs";
import { join, resolve, toFileUrl } from "@std/path";
import { stringify } from "@std/csv";

// Function to dynamically import TypeScript files from the input directory
async function importGroupFiles(inputDir: string): Promise<{ groupData: Record<string, Filetype[]> }> {
  console.log(`Reading files from directory: ${inputDir}`);
  const files = await Deno.readDir(inputDir);
  const groupData: Record<string, Filetype[]> = {};

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".ts")) {
      const filePath = join(inputDir, file.name);
      const absoluteFilePath = resolve(filePath); // Convert to absolute path
      const group = file.name.replace(".ts", "");
      console.log(`Importing file: ${file.name} as group: ${group}`);

      try {
        const moduleUrl = toFileUrl(absoluteFilePath).href;
        const module = await import(moduleUrl);
        if (module[group]) {
          groupData[group] = module[group];
          console.log(`Successfully imported file: ${file.name}`);
        } else {
          console.warn(`No export named '${group}' found in file: ${file.name}`);
        }
      } catch (error) {
        console.error(`Error importing file: ${file.name}`, error);
      }
    } else {
      console.log(`Skipping non-TypeScript file: ${file.name}`);
    }
  }

  console.log(`Finished reading files from directory: ${inputDir}`);
  return { groupData };
}

// Function to flatten the data structure for CSV
function flattenData(items: Filetype[]): Record<string, string>[] {
  return items.map(item => ({
    ext: (item.ext || []).join(', '),
    mimetype: (item.mimetype || []).join(', '),
    kind: (item.kind || []).join(', ')
  }));
}

// Function to write JSON and CSV files
async function writeFiles(groupData: Record<string, Filetype[]>, outputDir: string): Promise<void> {
  const jsonOutputDir = join(outputDir, "json");
  const csvOutputDir = join(outputDir, "csv");

  await emptyDir(outputDir);
  await ensureDir(jsonOutputDir);
  await ensureDir(csvOutputDir);

  const allItems: Filetype[] = [];

  // Grouped JSON and CSV files
  for (const [group, items] of Object.entries(groupData)) {
    if (!items) {
      console.warn(`No items found for group: ${group} `);
      continue;
    }

    allItems.push(...items);

    const jsonFile = join(jsonOutputDir, `${group}.json`);
    const csvFile = join(csvOutputDir, `${group}.csv`);

    console.log(`Writing JSON file: ${jsonFile} `);
    await Deno.writeTextFile(jsonFile, JSON.stringify(items, null, 2));

    // Flatten data for CSV
    const flattenedData = flattenData(items);
    console.log(`Flattened data for group: ${group} `, flattenedData);
    const groupCSV = await stringify(flattenedData, { columns: ["ext", "mimetype", "kind"], headers: true });

    console.log(`Writing CSV file: ${csvFile} `);
    await Deno.writeTextFile(csvFile, groupCSV);
  }

  // Write combined "all" files at the top level of the output directory
  const allJsonFile = join(outputDir, "all.json");
  const allCsvFile = join(outputDir, "all.csv");

  console.log(`Writing combined JSON file: ${allJsonFile} `);
  await Deno.writeTextFile(allJsonFile, JSON.stringify(allItems, null, 2));

  const flattenedAllData = flattenData(allItems);
  console.log(`Flattened data for all groups`, flattenedAllData);
  const allCSV = await stringify(flattenedAllData, { columns: ["ext", "mimetype", "kind"], headers: true });

  console.log(`Writing combined CSV file: ${allCsvFile} `);
  await Deno.writeTextFile(allCsvFile, allCSV);

  console.log('Files have been written successfully.');
}

// Main conversion function
export async function convert(inputDir: string = './src/filetypes', outputDir: string = './output'): Promise<void> {
  const { groupData } = await importGroupFiles(inputDir);
  await writeFiles(groupData, outputDir);
}

// Check for command-line arguments and call convert function
if (import.meta.main) {
  const inputDir = Deno.args[0] || './src/filetypes';
  const outputDir = Deno.args[1] || './output';
  convert(inputDir, outputDir).catch(err => console.error(err));
}