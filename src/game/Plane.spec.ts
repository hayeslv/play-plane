import { describe, it, expect } from "vitest";
import Bullet from "./Bullet";
import { setupPlane } from "./Plane";
describe("Plane", () => {
  describe("move", () => {
    const defaultOptions = {
      speed: 1,
      x: 0,
      y: 0,
    };
    it("moveDown", () => {
      const plane = setupPlane({}, { ...defaultOptions });

      plane.moveDown();

      expect(plane.y).toBe(plane.speed);
    });
    it("moveUp", () => {
      const plane = setupPlane({}, { ...defaultOptions });

      plane.moveUp();

      expect(plane.y).toBe(-plane.speed);
    });
    it("moveLeft", () => {
      const plane = setupPlane({}, { ...defaultOptions });

      plane.moveLeft();

      expect(plane.x).toBe(-plane.speed);
    });
    it("moveRight", () => {
      const plane = setupPlane({}, { ...defaultOptions });

      plane.moveRight();

      expect(plane.x).toBe(plane.speed);
    });
  });

  describe("攻击", () => {
    it("attack", () => {
      const bullets: any = [];
      const plane = setupPlane({}, {}, bullets);
      plane.attack();

      expect(bullets.length).toBe(1);
    });
  });

  describe("run", () => {
    it("移动所有的子弹", () => {
      const bullet = new Bullet();
      bullet.y = 0;

      const bullets = [bullet];
      const plane = setupPlane({}, {}, bullets);

      plane.run();

      expect(bullets[0].y).not.toBe(0);
    });
  });
});
