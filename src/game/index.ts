import { Application } from "pixi.js";
import { setupPlane } from "./Plane";

export * from "./Plane";

export const game = new Application({
  width: 500,
  height: 500,
});

document.body.appendChild(game.view);

export function initGame(_plane: any, bullets: any) {
  const plane = setupPlane(_plane, {});
  return { plane, bullets };
}
