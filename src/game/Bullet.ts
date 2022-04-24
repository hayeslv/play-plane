export default class Bullet {
  public x: number = 0;
  public y: number = 0;
  public speed: number = 5;
  constructor() {

  }

  move() {
    this.y -= this.speed;
  }
}
