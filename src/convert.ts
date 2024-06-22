/// <reference path="./types.d.ts" />
import { ensureDir } from "@std/fs";
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
  await ensureDir(outputDir);

  // Grouped JSON and CSV files
  for (const [group, items] of Object.entries(groupData)) {
    if (!items) {
      console.warn(`No items found for group: ${group} `);
      continue;
    }

    const jsonFile = join(outputDir, `${group}.json`);
    const csvFile = join(outputDir, `${group}.csv`);

    console.log(`Writing JSON file: ${jsonFile} `);
    await Deno.writeTextFile(jsonFile, JSON.stringify(items, null, 2));

    // Flatten data for CSV
    const flattenedData = flattenData(items);
    console.log(`Flattened data for group: ${group} `, flattenedData);
    const groupCSV = await stringify(flattenedData, { columns: ["ext", "mimetype", "kind"], headers: true });

    console.log(`Writing CSV file: ${csvFile} `);
    await Deno.writeTextFile(csvFile, groupCSV);
  }

  console.log('Files have been written successfully.');
}

// Main conversion function
async function convert(): Promise<void> {
  const inputDir = './src/filetypes';
  const outputDir = Deno.args[0] || './output'; // Default to './output' if no argument is provided

  const { groupData } = await importGroupFiles(inputDir);
  await writeFiles(groupData, outputDir);
}

convert().catch(err => console.error(err));