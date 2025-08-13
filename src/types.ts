import type { Units } from "./constants";
import type { targets } from "./targets";

export type TypeTargetsKey = keyof typeof targets;

export type Army = Record<keyof typeof Units, number>;

export type TargetsFileSchema = Record<string, TargetVillageInfoFileSchema>;

export type TargetVillageInfoFileSchema = {
  name: string;
  x: number;
  y: number;
};

export type SourcesFileSchema<T> = {
  id: string;
  attacks: SourcesVillageInfoFileSchema<T>[];
}[];

export type SourcesVillageInfoFileSchema<T> = {
  targetId: keyof T;
  x: number;
  y: number;
  army: Partial<Army>;
};
