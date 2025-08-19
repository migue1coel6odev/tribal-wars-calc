import type { Units } from "./constants";
import type { players } from "./info/players";
import type { targets } from "./info/targets";
import type { playersVillagesInfo } from "./info/villages_info";

export type TypeTargetsKey = keyof typeof targets;
export type TypePlayersKey = keyof typeof players;
export type TypePlayersVillageInfoKey = keyof typeof playersVillagesInfo;

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


export type PlayerInfo = Record<string, {
  name: string;
}>;

export type PlayerVillagesInfo = Record<string, {
  owner: TypePlayersKey;
  name: string;
  x: number;
  y: number;
}>;

export type AttackPlans = Array<{
  targetId: TypeTargetsKey;
  sources: Array<{
    village: TypePlayersVillageInfoKey;
    army: Partial<Army>;
  }>
  notes?: string;
}>;