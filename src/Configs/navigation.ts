import { NavigationItem } from "Types/NavigationItem";

export namespace NAVIGATION {
  export enum PATH {
    PHYSICS_RAPIER_WORLD = "rapier/world",
  }

  export const ITEMS: Array<NavigationItem> = [
    {
      label: "Physics-Rapier World",
      to: PATH.PHYSICS_RAPIER_WORLD,
    },
  ];
}
