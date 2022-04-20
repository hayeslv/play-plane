export interface Plane {
  x: number
  y: number
  speed: number
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
}

const defaultOptions = {
  x: 0,
  y: 0,
  speed: 5,
};

/**
 *
 * @export
 * @param {*} plane 用户需要的reactive对象
 * @param {*} [options={}] 额外参数
 * @returns {Plane}
 */
export function setupPlane(plane: any, options = {}): Plane {
  // init
  Object.assign(plane, defaultOptions, options);

  plane.moveDown = function moveDown() {
    plane.y += plane.speed;
  };
  plane.moveUp = function moveUp() {
    plane.y -= plane.speed;
  };
  plane.moveLeft = function moveLeft() {
    plane.x -= plane.speed;
  };
  plane.moveRight = function moveRight() {
    plane.x += plane.speed;
  };

  return plane;
}
