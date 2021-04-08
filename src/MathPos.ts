import { Position } from "./Position";

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomPosition = () => {
  let MAX_W: number = document.body.clientWidth - 120;
  let MAX_H: number = document.body.clientHeight - 120;
  let w: number = getRandomIntInclusive(0, MAX_W);
  let h: number = getRandomIntInclusive(0, MAX_H);

  return new Position(w, h);
};

export const overlapsExisting = (
  newPosition: Position,
  existingPosition: Position[]
) => {
  let overlaps: boolean = false;

  debugger;

  for (let len = 0; len < existingPosition.length; len++) {
    let x1 = existingPosition[len].getW();
    let y1 = existingPosition[len].getH();
    let dist = Math.sqrt(
      Math.pow(newPosition.getW() - x1, 2) +
        Math.pow(newPosition.getH() - y1, 2)
    );
    console.log(dist);
    if (dist < 120) {
      overlaps = true;
      break;
    }
  }

  return overlaps;
};
