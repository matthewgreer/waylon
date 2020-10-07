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
    debugger
    if (this.box[1] < 0) {
      return this.game.remove(this);
    }
  };

  isEating = () => {
    if (
      this.box[0] <= this.game.waylon[0].box[1] && // the nose of this enemy is at or beyond the nose of Waylon
      this.box[1] > this.game.waylon[0].box[0]   // AND the tail of this enemy is not past Waylon's tail
    ) {  // then check if...
      debugger
      return (
        this.box[3] >= this.game.waylon[0].box[2] && // the ventral side of the enemy is deeper than Waylon's dorsal side
        this.box[2] < this.game.waylon[0].box[3] // AND the dorsal side of the enemy is no deeper than Waylon's ventral side
        // and return TRUE if so, FALSE if not
      );
    } else {
      debugger
      return false; // but if the first condition wasn't met, return FALSE
    }
  };
};

export default Enemy;