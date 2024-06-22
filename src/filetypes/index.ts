/// <reference path="../types.d.ts" />
// Mappings between file extension,
// mimetype, and human-readable file 'kind'.

// Kind indicates the type of file
// as it exists to the user, rather 
// than as it exists to the computer.
// Both are useful, but kind is
// preferred in casual, intuitive settings
// where the user is concerned with
// the content of a system, not the
// system itself.

// Kinds should be singular.
// Kinds are lower-case, except where they
// refer to proper nouns or are abbreviated
// in the file extension, e.g. "HyperText
// Markup Language"
// Avoid using "file" at the end of the Kind.



// Official resource of Media Types (mimetypes)
// https://www.iana.org/assignments/media-types/media-types.xhtml

// Database of all mimetypes
// https://github.com/jshttp/mime-db




// {
//   "ext": ["bmp"],
//   "kind": ["Bitmap Image"],
//   "mimetype": ["image/bmp"]
//   "documentType"?: "spreadsheet"
// },


// The FileType arrays are separated for convenience.
import archive from "./archive.ts";
import audio from "./audio.ts";
import binary from "./binary.ts";
import book from "./book.ts";
import cad3d from "./cad3d.ts";
import certificate from "./certificates.ts";
import chemistry from "./chemistry.ts";
import code from "./code.ts";
import disk from "./disk.ts";
import document from "./document.ts";
import font from "./font.ts";
import graphic from "./graphic.ts";
import script from "./script.ts";
import source from "./source.ts";
import text from "./text.ts";
import uncategorized from "./uncategorized.ts";
import video from "./video.ts";


const combined: Filetype[] = [
  ...archive,
  ...audio,
  ...binary,
  ...book,
  ...cad3d,
  ...certificate,
  ...chemistry,
  ...code,
  ...disk,
  ...document,
  ...font,
  ...graphic,
  ...script,
  ...source,
  ...text,
  ...uncategorized,
  ...video,
];

export default combined;
