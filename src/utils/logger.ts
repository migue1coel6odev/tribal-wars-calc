import type {
  BuildAttackLogArguments,
  LogLevel,
  StartAttackLogArguments,
} from "./types";
import { formatDate, formatDuration } from "./utils";
import path from "node:path";
import { targets } from "../targets";
import type { TypeTargetsKey } from "../types";

export class Logger {
  private logs: Record<string, string> = {};
  private logLevel: LogLevel;

  constructor(logLevel?: LogLevel) {
    this.logLevel = logLevel || "normal";
  }

  setLogLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  beginLog(logId: string) {
    this.logs[logId] = "";
    return logId;
  }

  addLog(logId: keyof typeof this.logs, log: string) {
    this.logs[logId] += log;
  }

  buildTargetLog(
    logId: keyof typeof this.logs,
    targetId: TypeTargetsKey,
    arrivalTime: Date
  ) {
    this.logs[logId] += `---- Attack [${targets[targetId].name} (${
      targets[targetId].x
    }|${targets[targetId].y})] ${formatDate(arrivalTime)} ----`;
  }

  startAttackLog(logId: keyof typeof this.logs, args: StartAttackLogArguments) {
    const { villageInfo } = args;

    if (this.logLevel === "normal") {
      this.logs[logId] += `
        Village: ${
          villageInfo.name
        } (${villageInfo.getX()}|${villageInfo.getY()})`;
      return;
    }

    this.logs[logId] += `

[${villageInfo.name} (${villageInfo.getX()}|${villageInfo.getY()})]:`;
  }

  buildAttackLog(logId: keyof typeof this.logs, args: BuildAttackLogArguments) {
    const {
      villageInfo,
      departureTime,
      duration,
      attackTime,
      index = "-",
    } = args;

    if (this.logLevel === "normal") {
      this.logs[logId] += `
            Departure Time: ${formatDate(departureTime)}
            Duration: ${formatDuration(duration)}
            Arrival Time: ${formatDate(attackTime)}
            Army: ${villageInfo.getArmy()}
            `;
      return;
    }

    this.logs[logId] += `
\t${index}. send at ${formatDate(departureTime)}h (takes ${formatDuration(
      duration
    )}) with ${villageInfo.getArmy()}`;
  }

  async writeToFile(logId?: keyof typeof this.logs) {
    if (logId) {
      await Bun.write(
        path.resolve(__dirname, "..", `attack.txt`),
        this.logs[logId]!
      );
      return;
    }

    let allLogs = "";
    for (const logs of Object.values(this.logs)) {
      allLogs += logs;
      allLogs += "\n\n\n";
    }

    await Bun.write(path.resolve(__dirname, "..", `attack.txt`), allLogs);
  }
}
