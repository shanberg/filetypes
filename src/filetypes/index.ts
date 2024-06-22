/// <reference path="../types.d.ts" />

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
