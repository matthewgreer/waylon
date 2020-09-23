const Enemy = require("./enemy");
// const Util = require("./util");
const Orca = require("./orca");
const TharSheBlows = require("./thar_she_blows");
const Waylon = require("./waylon");
const WhiteShark = require("./whiteshark");


/*
NOTES: 
  ctx created in index.js
  ctx.canvas.height/width or this.dimensions[0]/[1]?


*/

const ENEMY_TYPES = [
  "WhiteShark",
  "Orca"
  // Hope to add many more in future updates
]

function Game() {
  this.dimensions = [1200, 1000]
  this.enemies = [];
  this.waylon;
  this.spray;
  this.waves;
  this.bubbles = [];

  // this.startGame
}

const SKY_GRADIENT = ctx.createLinearGradient(0, 0, 0, 100);
SKY_GRADIENT.addColorStop(0, "#8699F6");
SKY_GRADIENT.addColorStop(1, "#9AD3F3");

const OCEAN_GRADIENT = ctx.createLinearGradient(0, 100, 0, ctx.canvas.height);
OCEAN_GRADIENT.addColorStop(0, "#5AFFFF");
OCEAN_GRADIENT.addColorStop(1, "#000050");

Game.prototype.draw = function draw(ctx) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  ctx.fillStyle = SKY_GRADIENT;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.fillStyle = OCEAN_GRADIENT;
  ctx.fillRect(0, 100, ctx.canvas.width, ctx.canvas.height);

  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
};

Game.prototype.track = function track(object) {
  if (object instanceof Waylon) {
    this.waylon = object;
  } else if (object instanceof Enemy) {
    this.enemies.push(object);
  // } else if (object instanceof Bubble) {
  //   this.bubbles.push(object);
  } else {
    throw new Error("Unknown Object");
  }
};

Game.prototype.spawnEnemy = function spawnEnemy(enemyType) {
  const options = {
    game: this,
    sizeScale: this.randomScale(),
    position: [this.dimensions[0] + 1, this.randomDepth],
    velocity: this.randomVelocity()
  };

  switch (enemyType) {
    case "Orca":
      this.track(new Orca(options));
      break;
  
    default:
      this.track(new WhiteShark(options));
      break;
  }
  
};

Game.prototype.checkPredation = function checkPredation() {
  for (let i = 0; i < this.enemies.length; i++) {
    const predator = this.enemies[i];
    if (predator.isEating(this.waylon)) {
      // not sure what to return here yet
    }
  }
};

Game.prototype.randomDepth = function randomDepth(objectHeight) {
  return [1201, Math.floor(Math.random() * (1000 - objectHeight))];
};

Game.prototype.randomScale = function randomScale() {
  // rounded to hundredths
  return (scale = Math.round(100 * (Math.random() * 0.4 + 0.6)) / 100);
};;

Game.prototype.randomVelocity = function randomVelocity() {
  return (velocity = speed = Math.floor(Math.random() * 5) + 3);
};

Game.prototype.randomEnemy = function randomEnemy() {
  const chosenEnemyIdx = Math.floor(Math.random() * ENEMY_TYPES.length);
    return this.spawnEnemy(ENEMY_TYPES[chosenEnemyIdx])
};

Game.prototype.allObjects = function allObjects() {
  return [].concat(this.waylon, this.enemies) //this.bubbles
};

Game.prototype.moveObjects = function moveObjects(delta) {
  this.allObjects
}