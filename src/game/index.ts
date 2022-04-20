import { Application } from "pixi.js";

export * from "./Plane";

export const game = new Application({
  width: 500,
  height: 500,
});

document.body.appendChild(game.view);
