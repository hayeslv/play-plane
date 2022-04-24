import { Application } from "pixi.js";
import type { Plane } from "./Plane";
import { setupPlane } from "./Plane";

export * from "./Plane";

export const game = new Application({
  width: 500,
  height: 500,
});

document.body.appendChild(game.view);

export function initGame(_plane: any, bullets: any) {
  const plane = setupPlane(_plane, bullets);

  mainTicker(plane);

  return { plane, bullets };
}

function mainTicker(plane: Plane) {
  game.ticker.add(() => {
    plane.run();
  });
}
