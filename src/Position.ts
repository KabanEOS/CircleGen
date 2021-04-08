export class Position {
  w: number;
  h: number;

  constructor(w: number, h: number) {
    this.w = w;
    this.h = h;
  }

  getW(): number {
    return this.w;
  }
  getH(): number {
    return this.h;
  }
}
