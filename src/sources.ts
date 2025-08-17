import type { targets } from "./targets";
import type { SourcesFileSchema } from "./types";

export const sources: SourcesFileSchema<typeof targets> = [
  {
    id: "Puzzle",
    attacks: [
      {
        targetId: "cfelix001",
        x: 549,
        y: 401,
        army: {
          BATEDOR: 1,
        },
      },
      {
        targetId: "cfelix002",
        x: 549,
        y: 401,
        army: {
          BATEDOR: 1,
        },
      },
      {
        targetId: "cfelix003",
        x: 549,
        y: 401,
        army: {
          BATEDOR: 1,
        },
      },
      {
        targetId: "cfelix004",
        x: 549,
        y: 401,
        army: {
          BATEDOR: 1,
        },
      },
    ],
  },
  // {
  //   id: "Raptec",
  //   attacks: [
  //     {
  //       targetId: "queluz",
  //       x: 550,
  //       y: 411,
  //       army: {
  //         ARIETE: 1,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: "dannkumilla",
  //   attacks: [
  //     {
  //       targetId: "queluz",
  //       x: 547,
  //       y: 412,
  //       army: {
  //         ARIETE: 1,
  //       },
  //     },
  //   ],
  // },
  // {
  //   id: "Quintela",
  //   attacks: [
  //     {
  //       targetId: "queluz",
  //       x: 546,
  //       y: 415,
  //       army: { ARIETE: 1 },
  //     },
  //     {
  //       targetId: "queluz",
  //       x: 546,
  //       y: 415,
  //       army: { NOBRE: 1 },
  //     },
  //   ],
  // },
];
