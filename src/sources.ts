import type { targets } from "./targets";
import type { SourcesFileSchema } from "./types";

export const sources: SourcesFileSchema<typeof targets> = [
  {
    id: "Puzzle",
    attacks: [
      {
        targetId: "virato01",
        x: 549,
        y: 401,
        army: {
          BATEDOR: 1,
        },
      },
    ],
  },
  {
    id: "Raptec",
    attacks: [
      {
        targetId: "virato02",
        x: 550,
        y: 411,
        army: {
          BATEDOR: 1,
        },
      },
    ],
  },
  {
    id: "dannkumilla",
    attacks: [
      {
        targetId: "virato01",
        x: 547,
        y: 412,
        army: {
          BATEDOR: 1,
        },
      },
    ],
  },
  {
    id: "Quintela",
    attacks: [
      {
        targetId: "virato02",
        x: 546,
        y: 415,
        army: { BATEDOR: 1 },
      },
    ],
  },
];
