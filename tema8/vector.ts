export class Vector {
    private elements: number[];

    constructor(n: number, k: number) {
        this.elements = [];

        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)));
    }
}

    public print(): void {
        console.log (`[${this.elements.join(", ")}]`);
    }

    public add(v1: Vector): void {
        const minLength = Math.min(this.elements.length, v1.elements.length);
    
        for (let i = 0; i < minLength; i++) {
          this.elements[i] += v1.elements[i];
        }

    }

    public subs (v1: Vector): void {
        const minLength = Math.min(this.elements.length, v1.elements.length);
    
        for (let i = 0; i < minLength; i++) {
          this.elements[i] - v1.elements[i];
        }

    }

    public mult(v1: Vector): void {
        const minLength = Math.min(this.elements.length, v1.elements.length);
    
        for (let i = 0; i < minLength; i++) {
          this.elements[i] * v1.elements[i];
        }

    }

    
        public multNumber(n: number): void {
            this.elements = this.elements.map (val => val * n)
        }
      }

