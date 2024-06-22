# Filetypes

I created this when I needed a UI to respond appropriately when given a file of any type, and at this stage in the pipeline we couldn't inspect the file deeply enough to get the type from the file's content.

This repository is intended to provide a best guess at a filetype, given only a file extension.

It's meant to be complete and correct, so please file an issue if you find errors or exclusions, no matter how obscure the file type.

## The filetypes

The types themselves are available in JSON and CSV, and are converted there from a set of TS files in `/src`.
Filetypes are provided as a combined list [all.csv](/output/all.csv), [all.json](/output/all.json), or by group of type of file [audio.csv](/output/csv/audio.csv).
Filetypes are grouped by the the type of data or expected usage, .e.g. "chemistry", "document". These grouping are well intended, but fairly subjective.
Each field is an array because I've found multiple values for each field.

### "Kind" 
Kind indicates the possible types of a file as it exists to a human, rather than to the computer.
- Kind is written in singular form
- Kind is written in lower case, except where it refers to a proper noun, or is the expansion of an abbreviation in the extension, such as "HyperText Markup Language".
- Avoid using the word "file" at the end of Kind, as in "HyperText Markup Language file", because it's redundant.
- There can be multiple kinds for a given filetype, e.g. `.wks` can be either a `Microsoft Works Spreadsheet` or a `Lotus 1-2-3 Spreadsheet`. This is annoying.

#### JSON
```JSON
{
  "ext": ["midi", "mid"],
  "mimetype": ["audio/midi", "audio/x-midi"],
  "kind": ["Musical Instrument Digital Interface (MIDI)"]
}
```

#### CSV
```CSV
ext,mimetype,kind
"midi, mid","audio/midi, audio/x-midi",Musical Instrument Digital Interface (MIDI)`
```

## Sources

Most of the data here comes from these two locations
- https://www.iana.org/assignments/media-types/media-types.xhtml
- https://github.com/jshttp/mime-db

The rest is gleaned from web searches.



## Usage
### Updating the list
The list is stored in arrays in TypeScript in the source, and converted to JSON and CSV using this commend:

```
deno task convert
```
This will generate the output files in the output directory, organized into json and csv subdirectories. Combined "all" files will be placed at the top level of the output directory.

## Running Tests
To run the tests with the necessary permissions (file read, file write), use:

```
deno task test
```

## License
This project is licensed under the MIT License.
