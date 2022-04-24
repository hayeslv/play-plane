<script setup lang="ts">
import "./style/common.scss";
import Plane from "./components/Plane.vue";
import Bullet from "./components/Bullet.vue";
import { initGame } from "./game";
import { reactive } from "vue";

// const bullets;
const { plane, bullets } = initGame(
  reactive({}),
  reactive([{ x: 0, y: 0 }, { x: 50, y: 50 }]),
);
</script>

<template>
  <Container>
    <Plane :plane="plane" />
    <Bullet
      v-for="(bullet, index) in bullets"
      :key="index"
      :x="bullet.x"
      :y="bullet.y"
    />
  </Container>
</template>

<style>

</style>
