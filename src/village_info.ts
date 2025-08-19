import { subMinutes } from "date-fns/subMinutes";
import { Units } from "./constants";
import type {
  Army,
  SourcesVillageInfoFileSchema,
  TypeTargetsKey,
} from "./types";
import { targets } from "./info/targets";

export class VillageInfo {
  public name: string;
  private x: number;
  private y: number;
  private targetId: TypeTargetsKey;
  private army: Partial<Army>;

  constructor(id: string, info: SourcesVillageInfoFileSchema<typeof targets>) {
    const { targetId, x, y, army } = info;
    this.name = id;
    this.targetId = targetId;
    this.x = x;
    this.y = y;
    this.army = army;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getSpeed() {
    let currentSlowestSpeed = 0;
    for (const unitKey of Object.keys(this.army)) {
      if (this.army[unitKey as keyof Army] == 0) {
        continue;
      }
      const unitSpeed = Units[unitKey as keyof typeof Units];
      if (unitSpeed.speed > currentSlowestSpeed) {
        currentSlowestSpeed = unitSpeed.speed;
      }
    }
    if (currentSlowestSpeed === 0) {
      throw new Error("Source must have at least 1 unit!!");
    }
    return currentSlowestSpeed;
  }

  private getTarget() {
    return targets[this.targetId];
  }

  private calculateDistanceToCoord() {
    const target = this.getTarget();
    return Math.sqrt(
      Math.pow(target.x - this.x, 2) + Math.pow(target.y - this.y, 2)
    );
  }

  calculateTimeToTarget() {
    return this.calculateDistanceToCoord() * this.getSpeed();
  }

  calculateDepartureTime(optimalArrivalTime: Date) {
    const duration = this.calculateTimeToTarget();
    return subMinutes(optimalArrivalTime, duration);
  }

  getArmy() {
    return Object.entries(this.army)
      .filter(([, nrUnits]) => nrUnits > 0)
      .map(([unit]) => unit.toLocaleLowerCase())
      .join(", ");
  }
}
