/// <reference lib="deno.ns" />
import { ensureDir, readJson, writeJson } from "https://deno.land/std@0.155.0/fs/mod.ts";
import { stringify } from "https://deno.land/std@0.155.0/encoding/csv.ts";
import { join } from "https://deno.land/std@0.155.0/path/mod.ts";

// Function to read JSON files from the input directory
async function readGroupFiles(inputDir: string) {
  const files = await Deno.readDir(inputDir);
  const data: any[] = [];
  const groupData: Record<string, any[]> = {};

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".json")) {
      const filePath = join(inputDir, file.name);
      const group = file.name.replace(".json", "");
      const groupItems = await readJson(filePath) as any[];

      data.push(...groupItems);
      groupData[group] = groupItems;
    }
  }

  return { data, groupData };
}

// Function to write JSON and CSV files
async function writeFiles(data: any[], groupData: Record<string, any[]>) {
  const outputDir = './output';
  await ensureDir(outputDir);

  // Combined JSON and CSV
  const combinedJSON = `${outputDir}/all.json`;
  const combinedCSV = `${outputDir}/all.csv`;

  await writeJson(combinedJSON, data, { spaces: 2 });
  const csv = await stringify(data);
  await Deno.writeTextFile(combinedCSV, csv);

  // Grouped JSON and CSV files
  for (const [group, items] of Object.entries(groupData)) {
    const jsonFile = `${outputDir}/${group}.json`;
    const csvFile = `${outputDir}/${group}.csv`;

    await writeJson(jsonFile, items, { spaces: 2 });
    const groupCSV = await stringify(items);
    await Deno.writeTextFile(csvFile, groupCSV);
  }

  console.log('Files have been written successfully.');
}

async function convert() {
  const inputDir = './input';
  const { data, groupData } = await readGroupFiles(inputDir);
  await writeFiles(data, groupData);
}

convert().catch(err => console.error(err));