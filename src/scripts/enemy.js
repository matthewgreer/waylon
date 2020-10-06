// import Util from "./util";

class Enemy {
  constructor(options) {
    this.position = options.position;
    this.velocity = options.velocity;
    this.hSize;
    this.vSize;
    this.sizeScale = options.sizeScale;
    this.box = [];
    this.game = options.game;
  }

  isEating = () => {
    if (
      this.box[0] <= this.game.waylon.box[1] ||
      this.box[1] >= this.game.waylon.box[1]
    ) {
      return (
        this.box[3] <= this.game.waylon.box[2] ||
        this.box[2] >= this.game.waylon.box[3]
      );
    } else {
      return false;
    }
  };

  move = (velocityScale) => {
    this.box = [
      this.position[0],
      this.position[0] + this.sizeScale * this.hSize,
      this.position[1],
      this.position[1] + this.sizeScale * this.vSize,
    ];
    // currently, enemies move along a constant depth (y-value)
    // future updates will provide more complex enemy movement
    let offsetX = this.velocity * velocityScale;
    this.position = [this.position[0] - offsetX, this.position[1]];
    if (this.box[0] < 0) {
      return this.game.remove(this);
    }
  };
};

export default Enemy;