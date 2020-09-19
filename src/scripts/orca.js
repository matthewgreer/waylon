const Enemy = require("./enemy");
const Util = require("./util");

function Orca(options) {
  options = options || {};

  // these attributes are assigned at creation by options.game
  // this.game
  // this.position assigned randomly by .randomDepth()
  // this.sizeScale assigned randomly by .randomScale()
  // this.velocity assigned randomly by .randomVelocity()

  this.hSize = options.sizeScale * 862;
  this.vSize = options.sizeScale * 371;
  this.box = [
    this.position[0],
    this.position[0] + hSize,
    this.position[1],
    this.position[1] + vSize,
  ];

  Enemy.call(this, options);
};

Util.inherits(Orca, Enemy);

Orca.prototype.draw = (ctx) => {
  
  const x = this.position[0];
  const y = this.position[1];

  ctx.fillStyle = "#000000";

};

module.exports = Orca;