
export class Coord {

    constructor(private x: number, private y: number ){

    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    calculateDistanceToCoord(target: Coord) {
        return Math.abs(this.x - target.getX()) + Math.abs(this.y - target.getY())
    }

}