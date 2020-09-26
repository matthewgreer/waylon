import * as myColors from "../styles/_colors.scss";
// import { myColors } from "../styles/_colors.scss";
// import myColors from "../styles/_colors.scss";
import Enemy from "./enemy";
import Orca from "./orca";
import TharSheBlows from "./thar_she_blows";
import Waves from "./waves";
import Waylon from "./waylon";
import WhiteShark from "./whiteshark";

const ENEMY_TYPES = [
  "WhiteShark",
  "Orca"
  // Hope to add many more in future updates
]

function Game() {
  this.dimensions = [1200, 900]
  this.enemies = [];
  this.waylon = [];
  this.tharSheBlows = [];
  this.waves = [];
  this.bubbles = [];
}

Game.prototype.draw = function draw(ctx) {

  const skyGradient = ctx.createLinearGradient(0, 0, 0, 100);
  skyGradient.addColorStop(0, "rgba(134, 153, 246, 1.0)");
  skyGradient.addColorStop(1, "rgba(151, 202, 243, 1.0)");
  // skyGradient.addColorStop(0, myColors.skyTop);
  // skyGradient.addColorStop(1, myColors.skyHorizon);
  
  const oceanGradient = ctx.createLinearGradient(0, 100, 0, ctx.canvas.height);
  oceanGradient.addColorStop(0, "rgba(87, 247, 250, 1.0)");
  oceanGradient.addColorStop(1, "rgba(0, 0, 80, 1.0)");
  // oceanGradient.addColorStop(0, myColors.oceanHorizon);
  // oceanGradient.addColorStop(1, myColors.deepBlue);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  
  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, ctx.canvas.width, 100);
  ctx.fillStyle = oceanGradient;
  ctx.fillRect(0, 100, ctx.canvas.width, ctx.canvas.height);

  this.allObjects().forEach(function(object) {
    object.draw(ctx);
  });
};

Game.prototype.add = function add(object) {
  if (object instanceof Waylon) {
    this.waylon.push(object);
  } else if (object instanceof Enemy) { //does this need to be specific?
    this.enemies.push(object);
  } else if (object instanceof Waves) {
    this.waves.push(object);
  } else if (object instanceof TharSheBlows) {
    this.tharSheBlows.push(object);
  // } else if (object instanceof Bubble) {
  //   this.bubbles.push(object);
  } else {
    throw new Error("wat");
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
      this.add(new Orca(options));
      break;
  
    default:
      this.add(new WhiteShark(options));
      break;
  }
  
};

Game.prototype.checkPredation = function checkPredation() {
  for (let i = 0; i < this.enemies.length; i++) {
    const predator = this.enemies[i];
    if (predator.isEating(this.waylon)) {
      // not sure what to return here yet...
      // should it just be T/F is the predator eating Waylon?
    }
  }
};

Game.prototype.randomDepth = function randomDepth(objectHeight) {
  return [1201, Math.floor(Math.random() * (900 - objectHeight))];
};

Game.prototype.randomScale = function randomScale() {
  // rounded to hundredths
  return (scale = Math.round(100 * (Math.random() * 0.4 + 0.6)) / 100);
};;

Game.prototype.randomVelocity = function randomVelocity() {
  return (Math.floor(Math.random() * 5) + 3);
};

Game.prototype.randomEnemy = function randomEnemy() {
  const chosenEnemyIdx = Math.floor(Math.random() * ENEMY_TYPES.length);
    return this.spawnEnemy(ENEMY_TYPES[chosenEnemyIdx])
};

Game.prototype.allObjects = function allObjects() {
  return [].concat(this.waylon, this.enemies, this.waves, this.tharSheBlows); //this.bubbles
};

Game.prototype.moveObjects = function moveObjects(velocityScale) {
  debugger
  this.allObjects().forEach(function(object){
    object.move(velocityScale);
  });
};

Game.prototype.step = function step(delta) {
  const NORMAL_FRAME_TIME_DELTA = 1000 / 60;
  const velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
  this.moveObjects(velocityScale);
  this.checkPredation();
};

export default Game;