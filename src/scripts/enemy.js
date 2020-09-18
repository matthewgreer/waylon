// const Util = require("./util");

function Enemy(options) {
  this.position = options.position;
  this.velocity = options.velocity;
  this.hSize = options.hSize;
  this.vSize = options.vSize;
  this.sizeScale = options.sizeScale;
  this.box = [
    this.position[0], 
    this.position[0] + (sizeScale * hSize), 
    this.position[1], 
    this.position[1] + (sizeScale * vSize)
  ];
  this.game = options.game;
}

Enemy.prototype.isEating = function isEating(waylon) {
  
  if (this.box[0] <= waylon.box[1] || this.box[1] >= waylon.box[1]) {
    return this.box[3] <= waylon.box[2] || this.box[2] >= waylon.box[3];
  } else {
  return false;
  }

};

const STANDARD_FRAME_RATE_TIME_DELTA = 16.66666667;

Enemy.prototype.move = function move(timeDelta) {
  const velocityScale = timeDelta / STANDARD_FRAME_RATE_TIME_DELTA, // multiply by sizeScale???
    offsetX = this.velocity[0] * velocityScale,
    offsetY = this.velocity[1] * velocityScale;

    this.position = [this.position[0] + offsetX, this.pos[1] + offsetY];

  if (this.box[1] < 0) { this.remove() }
};

Enemy.prototype.remove = function remove() {
  this.game.remove(this);
};

module.exports = Enemy;