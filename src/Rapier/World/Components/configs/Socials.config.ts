import { MathUtils } from "three";
import { Euler } from "three";
export const SOCIALS = Object.freeze([
  {
    id: 0,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/wouter-tack-328530273/",
    icon: "linkedin",
    rotation: new Euler(0, MathUtils.degToRad(210), 0),
    position: [11, 5, 16.5],
    scale: [0.5, 0.5, 0.5],
  },
  {
    id: 1,
    name: "Instagram",
    url: "https://www.instagram.com/woutertack/",
    icon: "instagram",
    rotation: new Euler(0, MathUtils.degToRad(190), 0),
    position: [6, 5, 19],
    scale: [0.5, 0.5, 0.5],
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/woutertack",
    icon: "github",
    rotation: new Euler(0, MathUtils.degToRad(180), 0),
    position: [0, 5, 20],
    scale: [0.5, 0.5, 0.5],
  },
]);
