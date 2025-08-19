import type { TZDate } from "@date-fns/tz";
import type { VillageInfo } from "../village_info";
import type { TypePlayersVillageInfoKey } from "../types";

export type GetAttackTimeArguments = {
  hours: number;
  minutes: number;
};

export type StartAttackLogArguments = {
  villageId: TypePlayersVillageInfoKey;
};

export type BuildAttackLogArguments = {
  departureTime: Date;
  duration: number;
  attackTime: TZDate;
  villageInfo: VillageInfo;
  index?: number;
};

export type LogLevel = "normal" | "compact";
