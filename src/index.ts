import { attacks } from "./info/attacks";
import { playersVillagesInfo } from "./info/villages_info";
import type { TypePlayersVillageInfoKey } from "./types";
import { Logger } from "./utils/logger";
import type { BuildAttackLogArguments } from "./utils/types";
import { getAttackTime } from "./utils/utils";
import { VillageInfo } from "./village_info";

const log = new Logger("compact");

const attackTime = getAttackTime({
  hours: 22,
  minutes: 0,
});

for (const attackInfo of attacks) {
  const { targetId, sources } = attackInfo;

  const logId = log.beginLog(targetId);
  log.buildTargetLog(logId, targetId, attackTime);

  const attacksByPlayer = new Map<TypePlayersVillageInfoKey, BuildAttackLogArguments[]>();

  for (const sourceInfo of sources) {
    const { village, army } = sourceInfo;
    const { x, y } = playersVillagesInfo[village];

    const villageInfoClass = new VillageInfo(village, {
      army,
      targetId,
      x,
      y
    });

    const departureTime = villageInfoClass.calculateDepartureTime(attackTime);
    const duration = villageInfoClass.calculateTimeToTarget();
    const buildLog: BuildAttackLogArguments = {
      attackTime,
      departureTime,
      duration,
      villageInfo: villageInfoClass,
    };

    if (attacksByPlayer.has(village)) {
      attacksByPlayer.get(village)?.push(
        buildLog
      );
      continue;
    }

    attacksByPlayer.set(village, [buildLog]);

  }

  for (const attackByPlayerEntry of attacksByPlayer) {
    const [village, buildLogs] = attackByPlayerEntry;
    let index = 1;
    log.startAttackLog(logId, {
      villageId: village
    });
    for (const buildLog of buildLogs.sort((a, b) => a.duration > b.duration ? -1 : 1)) {
      log.buildAttackLog(logId, {
        ...buildLog,
        index: index++
      });
    }

  }

}

log.writeToFile();
