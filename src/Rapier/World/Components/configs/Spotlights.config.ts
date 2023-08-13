import { Euler, MathUtils } from "three";

export const SPOTLIGHTS = Object.freeze([
  {
    id: 0,
    position: [21, 1.2, -2],
    rotation: new Euler(0, MathUtils.degToRad(-18), 0),
    scale: [0.5, 0.5, 0.5],
  },
  {
    id: 1,
    position: [-1, 1.2, -10],
    rotation: new Euler(0, MathUtils.degToRad(60), 0),
    scale: [0.5, 0.5, 0.5],
  },
  {
    id: 2,
    position: [-14, 0.2, -1],
    rotation: new Euler(0, MathUtils.degToRad(-60), 0),
    scale: [0.5, 0.5, 0.5],
  },
]);
