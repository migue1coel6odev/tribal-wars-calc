import type { BuildAttackLogArguments } from "./types";
import { format } from "date-fns";
import { formatDuration } from "./utils";
import path from "node:path";

export class Logger {
  private log: string = "";

  constructor() {}

  addLog(log: string) {
    this.log += log;
  }

  buildAttackLog(args: BuildAttackLogArguments) {
    const { villageInfo, departureTime, duration, attackTime } = args;

    this.log += `
        Village: ${villageInfo.name}
        Departure Time: ${format(departureTime, "H:mm")}
        Duration: ${formatDuration(duration)}
        Arrival Time: ${format(attackTime, "H:mm")}
        Army: ${villageInfo.getArmy()}
    `;
  }

  async writeToFile() {
    await Bun.write(path.resolve(__dirname, "..", `attack.txt`), this.log);
  }
}
