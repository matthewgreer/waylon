// const Util = require("./util");

function Enemy(options) {
  this.position = options.position;
  this.velocity = options.velocity;
  this.hSize;
  this.vSize;
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

Enemy.prototype.move = function move(velocityScale) {
  // currently, enemies move along a constant depth (y-value)
  // future updates will provide more complex enemy movement
  offsetX = this.velocity * velocityScale,
  this.position = [this.position[0] + offsetX, this.pos[1]];
  if (this.box[1] < 0) { this.game.remove(this) }
};

module.exports = Enemy;