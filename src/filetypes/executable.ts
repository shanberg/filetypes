/// <reference path="../types.d.ts" />

export const executable: Filetype[] = [
  {
    "ext": ["c32"],
    "kind": ["COMBOOT Executable (32-bit)"],
  },
  {
    "ext": ["cbt"],
    "kind": ["COMBOOT Executable (incompatible with DOS COM files)"]
  },
  {
    "ext": ["beam"],
    "kind": ["BEAM Executable (Fat Binary)"]
  },
  {
    "ext": ["dex"],
    "kind": ["Dalvik executable"]
  },
  {
    "ext": ["dol"],
    "kind": ["Nintendo Wii and GameCube proprietary executable format"]
  },
  {
    "ext": ["exe"],
    "kind": ["Windows directly executable program"]
  },
  {
    "ext": ["cmd"],
    "kind": ["CP/M-86 Executable Program"]
  },
  {
    "ext": ["x86"],
    "kind": ["x86 Executable file"]
  },
  {
    "ext": ["x86_64"],
    "kind": ["x86-64 Executable file"]
  },
  {
    "ext": ["x64"],
    "kind": ["64-bit Executable file"]
  },
  {
    "ext": ["xex"],
    "kind": ["Xbox 360 Executable File"]
  },
  {
    "ext": ["xqt"],
    "kind": ["Waffle Executable file"]
  },
];

export default executable;
