export class Point {
    constructor(
        private x: number,
        private y: number
    ) {}

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }
}