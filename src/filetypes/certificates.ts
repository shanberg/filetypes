/// <reference path="../types.d.ts" />

export const certificate: Filetype[] = [
  {
    "ext": ["cer", "crt"],
    "kind": ["Security certificate"]
  },
  {
    "ext": ["der"],
    "kind": ["Microsoft security certificate"]
  },
  {
    "ext": ["pem"],
    "kind": ["Cryptographic certificate"]
  },
  {
    "ext": ["pfx"],
    "kind": ["Encrypted certificate"]
  },
];

export default certificate;