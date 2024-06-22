/// <reference path="./types.d.ts" />
import { assert } from "@std/assert";
import { ensureDir, exists } from "@std/fs";
import { convert } from "./convert.ts";


Deno.test("convert should process input files and produce output files", async () => {
  const inputDir = "./test-input";
  const outputDir = "./test-output";

  // Ensure input and output directories exist
  await ensureDir(inputDir);
  await ensureDir(outputDir);

  // Create a sample input file
  const sampleInput = `
    export const text = [
      {
        ext: ["txt"],
        mimetype: ["text/plain"],
        kind: ["text file"],
      },
    ];
  `;
  await Deno.writeTextFile(`${inputDir}/text.ts`, sampleInput);

  // Run the convert function
  await convert(inputDir, outputDir);

  // Check that output files exist
  const jsonExists = await exists(`${outputDir}/json/text.json`);
  const csvExists = await exists(`${outputDir}/csv/text.csv`);
  const allJsonExists = await exists(`${outputDir}/all.json`);
  const allCsvExists = await exists(`${outputDir}/all.csv`);

  assert(jsonExists, "JSON output file should exist");
  assert(csvExists, "CSV output file should exist");
  assert(allJsonExists, "Combined JSON output file should exist");
  assert(allCsvExists, "Combined CSV output file should exist");

  // Clean up
  await Deno.remove(inputDir, { recursive: true });
  await Deno.remove(outputDir, { recursive: true });
});