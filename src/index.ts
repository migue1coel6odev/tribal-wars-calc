import { sources } from "./sources";
import { targets } from "./targets";
import { Logger } from "./utils/logger";
import { getAttackTime } from "./utils/utils";
import { VillageInfo } from "./village_info";

const log = new Logger();
const allSources: Map<keyof typeof targets, VillageInfo[]> = new Map();

for (const source of sources) {
  for (const attackInfo of source.attacks) {
    const villageInfo = new VillageInfo(source.id, attackInfo);
    if (allSources.has(attackInfo.targetId)) {
      allSources.get(attackInfo.targetId)!.push(villageInfo);
      continue;
    }
    allSources.set(attackInfo.targetId, [villageInfo]);
  }
}

const attackTime = getAttackTime({
  hours: 14,
  minutes: 0,
});

for (const [targetId] of Object.entries(targets)) {
  log.addLog(`Attack ${targetId}`);

  for (const villageInfo of allSources.get(targetId as any)!) {
    const departureTime = villageInfo.calculateDepartureTime(attackTime);
    const duration = villageInfo.calculateTimeToTarget();

    log.buildAttackLog({
      attackTime,
      departureTime,
      duration,
      villageInfo,
    });
  }
}

log.writeToFile();
