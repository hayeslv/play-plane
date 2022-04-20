import { describe, it, expect } from "vitest";
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
});
