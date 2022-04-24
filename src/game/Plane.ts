import Bullet from "./Bullet";

export interface Plane {
  x: number
  y: number
  speed: number
  moveDown: () => void
  moveUp: () => void
  moveLeft: () => void
  moveRight: () => void
  attack: () => void
  run: () => void
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
export function setupPlane(plane: any, bullets: Bullet[], options = {}): Plane {
  // init
  plane.bullets = bullets;
  Object.assign(plane, defaultOptions, options);

  initAttack(plane, bullets);

  initRun(plane, bullets);

  initMove(plane);

  return plane;
}

// 初始化飞机移动逻辑
function initMove(plane: Plane) {
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
}
// 初始化子弹移动逻辑
function initRun(plane: Plane, bullets: Bullet[]) {
  plane.run = () => {
    bullets.forEach(bullet => {
      bullet.move();
    });
  };
}
// 初始化攻击逻辑
function initAttack(plane: Plane, bullets: Bullet[]) {
  plane.attack = () => {
    // 创建子弹
    const bullet = new Bullet();
    bullet.x = plane.x + 25; // 调整子弹的位置
    bullet.y = plane.y;
    bullets.push(bullet);
  };
}
