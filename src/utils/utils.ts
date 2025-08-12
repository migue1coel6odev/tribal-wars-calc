import { TZDate } from "@date-fns/tz/date";
import type { GetAttackTimeArguments } from "./types";

export function formatDuration(nrMinutes: number) {
  const hours = Math.floor(nrMinutes / 60);
  const minutes = Math.floor(nrMinutes - hours * 60);
  const seconds = (60 * nrMinutes) % 1;

  return `${hours}:${minutes}:${seconds}`;
}

export function getAttackTime(args: GetAttackTimeArguments): TZDate {
  const { hours, minutes } = args;
  const now = new TZDate(new Date(), "Europe/Lisbon");
  const attackTime = new TZDate(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    23,
    30,
    0,
    0
  );
  attackTime.setHours(hours);
  attackTime.setMinutes(minutes);

  return attackTime;
}
