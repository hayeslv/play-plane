<script setup lang="ts">
import type { PropType } from "vue";
import planeImg from "~/assets/plane.png";
import type { Plane } from "~/game";

const props = defineProps({
  plane: {
    type: Object as PropType<Plane>,
    required: true,
  },
});

window.addEventListener("keydown", e => {
  if (e.code === "Space") {
    props.plane.attack();
  }

  switch (e.code) {
    case "ArrowDown":
      props.plane.moveDown();
      break;
    case "ArrowUp":
      props.plane.moveUp();
      break;
    case "ArrowLeft":
      props.plane.moveLeft();
      break;
    case "ArrowRight":
      props.plane.moveRight();
      break;
    default:
      break;
  }
});
</script>

<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planeImg" />
  </Container>
</template>

<style lang="scss" scoped>
</style>
