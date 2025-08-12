import type { targets } from "./targets";
import type { SourcesFileSchema } from "./types";

export const sources: SourcesFileSchema<typeof targets> = [
  {
    id: "Puzzle",
    attacks: [
      {
        targetId: "queluz",
        x: 549,
        y: 401,
        army: {
          ARIETE: 1,
        },
      },
    ],
  },
  {
    id: "Raptec",
    attacks: [
      {
        targetId: "queluz",
        x: 548,
        y: 403,
        army: {},
      },
    ],
  },
  {
    id: "dannkumilla",
    attacks: [
      {
        targetId: "queluz",
        x: 547,
        y: 412,
        army: {},
      },
    ],
  },
  {
    id: "Quintela",
    attacks: [
      {
        targetId: "queluz",
        x: 546,
        y: 415,
        army: {},
      },
    ],
  },
];
