// import { createApp } from "vue";
// import router from "./router";
// import App from "./App";

// const app = createApp(App);
// app.use(router);
// app.mount("#app");

import { Application } from "pixi.js";

const game = new Application({
  width: 500,
  height: 500,
});

document.body.appendChild(game.view);
