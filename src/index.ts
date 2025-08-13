import { sources } from "./sources";
import { targets } from "./targets";
import type { TypeTargetsKey } from "./types";
import { Logger } from "./utils/logger";
import { getAttackTime } from "./utils/utils";
import { VillageInfo } from "./village_info";

const log = new Logger("compact");

const allSources: Map<TypeTargetsKey, Map<string, VillageInfo[]>> = new Map();

for (const source of sources) {
  for (const attackInfo of source.attacks) {
    const villageInfo = new VillageInfo(source.id, attackInfo);
    if (allSources.has(attackInfo.targetId)) {
      if (allSources.get(attackInfo.targetId)?.has(villageInfo.name)) {
        allSources
          .get(attackInfo.targetId)
          ?.get(villageInfo.name)
          ?.push(villageInfo);
      } else {
        allSources
          .get(attackInfo.targetId)
          ?.set(villageInfo.name, [villageInfo]);
      }
      continue;
    }
    allSources.set(attackInfo.targetId, new Map<string, VillageInfo[]>());
    allSources.get(attackInfo.targetId)?.set(villageInfo.name, [villageInfo]);
  }
}

const attackTime = getAttackTime({
  hours: 14,
  minutes: 0,
});

for (const [targetId] of Object.entries(targets)) {
  const logId = log.beginLog(targetId);
  log.buildTargetLog(logId, targetId as TypeTargetsKey, attackTime);

  for (const playersInfo of allSources
    .get(targetId as TypeTargetsKey)!
    .values()) {
    let currentIndex = 1;
    log.startAttackLog(logId, {
      villageInfo: playersInfo[0]!,
    });
    for (const villageInfo of playersInfo.values()) {
      const departureTime = villageInfo.calculateDepartureTime(attackTime);
      const duration = villageInfo.calculateTimeToTarget();

      log.buildAttackLog(logId, {
        attackTime,
        departureTime,
        duration,
        villageInfo,
        index: currentIndex++,
      });
    }
  }
}

log.writeToFile();
