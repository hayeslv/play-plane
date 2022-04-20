// import { createApp } from "vue";
// import router from "./router";
// import App from "./App";

// const app = createApp(App);
// app.use(router);
// app.mount("#app");

import { game } from "./game";
import App from "./App.vue";
import { createApp } from "./runtime-canvas";

createApp(App).mount(game.stage);
