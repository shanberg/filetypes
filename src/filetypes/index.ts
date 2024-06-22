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
import archive from "./archive";
import audio from "./audio";
import binary from "./binary";
import book from "./book";
import cad3d from "./cad3d";
import certificate from "./certificate";
import chemistry from "./chemistry";
import code from "./code";
import disk from "./disk";
import document from "./document";
import font from "./font";
import graphic from "./graphic";
import script from "./script";
import source from "./source";
import text from "./text";
import uncategorized from "./uncategorized";
import video from "./video";


const filetypes = (
  archive,
  audio
  binary,
  book,
  cad3d,
  certificate,
  chemistry,
  code,
  disk,
  document,
  font,
  graphic,
  script,
  source,
  text,
  uncategorized,
  video,
) => [
    ...archive,
    ...audio
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

export default filetypes;
