// import { createApp } from "vue";
// import router from "./router";
// import App from "./App";

// const app = createApp(App);
// app.use(router);
// app.mount("#app");

import { Application, Container, Sprite, Text, Texture } from "pixi.js";
import App from "./App.vue";

import { createRenderer } from "vue";

const game = new Application({
  width: 500,
  height: 500,
});

document.body.appendChild(game.view);

const renderer = createRenderer<Container, Container>({
  createElement(type) {
    // 容器：Container
    let element;
    switch (type) {
      case "Container":
        element = new Container();
        break;
      case "Sprite":
        element = new Sprite();
        break;
      default:
        throw new Error(`Unknown element type: ${type}`);
    }
    return element;
  },
  patchProp(el, key, prevValue, nextValue) {
    switch (key) {
      case "texture":
        (el as Sprite).texture = Texture.from(nextValue);
        break;
      default:
        break;
    }
  },
  insert(el, parent) {
    if (el && parent) {
      parent.addChild(el);
    }
  },
  remove(el) {
    if (el && el.parent) {
      el.parent.removeChild(el);
    }
  },
  createText(text) {
    return new Text(text);
  },
  createComment(text) {
    return new Text(text);
  },
  setText() {
  },
  setElementText() {
  },
  parentNode(node) {
    return node.parent;
  },
  nextSibling() {
    return null;
  },
});

renderer.createApp(App).mount(game.stage);
