// import * as myColors from "../styles/_colors.scss";
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

class Game {
  constructor() {
    this.dimensions = [1200, 900];
    this.enemies = [];
    this.waylon = [];
    this.tharSheBlows = [];
    this.waves = [];
    this.paused = true;
    this.progressInFeet = 0;
    this.tick;
    this.spawn;
    this.spawnDelay = 0;
    this.enemiesSpawned = 0;
    // this.bubbles = [];
    // this.difficulty = 1;
  }

  draw = (ctx) => {
    const skyGradient = ctx.createLinearGradient(0, 0, 0, 100);
    skyGradient.addColorStop(0, "rgba(134, 153, 246, 1.0)");
    skyGradient.addColorStop(1, "rgba(151, 202, 243, 1.0)");
    // skyGradient.addColorStop(0, myColors.skyTop);
    // skyGradient.addColorStop(1, myColors.skyHorizon);

    const oceanGradient = ctx.createLinearGradient(
      0,
      100,
      0,
      this.dimensions[1]
    );
    oceanGradient.addColorStop(0, "rgba(87, 247, 250, 1.0)");
    oceanGradient.addColorStop(1, "rgba(0, 0, 80, 1.0)");
    // oceanGradient.addColorStop(0, myColors.oceanHorizon);
    // oceanGradient.addColorStop(1, myColors.deepBlue);
    ctx.clearRect(0, 0, this.dimensions[0], this.dimensions[1]);

    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, this.dimensions[0], 100);
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, 100, this.dimensions[0], this.dimensions[1]);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  };

  add = (object) => {
    if (object instanceof Waylon) {
      this.waylon.push(object);
    } else if (object instanceof Enemy) {
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

  remove = (object) => {
    if (object instanceof Enemy) {
      this.enemies.splice(this.enemies.indexOf(object), 1);
    // } else if (object instanceof Bubble) {
      // this.bubbles.splice(this.bubbles.indexOf(object), 1);
    }
  };
  
  startProgressTally = () => {
    this.tick = setInterval(() => {
      return (this.progressInFeet ++);
    }, 100);
  };

  spawnTimer = () => {
    this.spawn = setInterval(() => {
      if (!this.paused) {
        if (this.spawnDelay === 5) {
          this.chooseRandomEnemy();
          return this.spawnDelay = 0;
        }
        return this.spawnDelay ++;
      }
    }, 1000);
  };

  stopProgressTally = () => {
    return clearInterval(this.tick);
  };

  chooseRandomEnemy = () => {
    const chosenEnemyIdx = Math.floor(Math.random() * ENEMY_TYPES.length);
    return this.spawnEnemy(ENEMY_TYPES[chosenEnemyIdx]);
  };

  spawnEnemy = (enemyType) => {
    const options = {
      game: this,
      sizeScale: this.randomScale(),
      position: [this.dimensions[0] + 1, 0],
      velocity: this.randomVelocity()
    };

    let enemy;
    switch (enemyType) {
      case "Orca":
        enemy = new Orca(options);
        enemy.position[1] = this.randomDepth(enemy.vSize);
        return this.add(enemy);
      default:
        enemy = new WhiteShark(options);
        enemy.position[1] = this.randomDepth(enemy.vSize);
        return this.add(enemy);
    }
  };

  randomDepth = (objectHeight) => {
    return Math.floor(Math.random() * (900 - objectHeight));
  };

  randomScale = () => {
    // rounded to hundredths
    return Math.round(100 * (Math.random() * 0.3 + 0.5)) / 100;
  };

  randomVelocity = () => {
    return Math.floor(Math.random() * 5) + 3;
  };

  allObjects = () => {
    return [].concat(this.waves, this.tharSheBlows, this.waylon, this.enemies); //this.bubbles
  };

  moveObjects = (velocityScale) => {
    this.allObjects().forEach((object) => {
      object.move(velocityScale);
    });
  };

  step = (delta) => {
    const NORMAL_FRAME_TIME_DELTA = 1000 / 60; // 60fps
    const velocityScale = delta / NORMAL_FRAME_TIME_DELTA;
    return this.moveObjects(velocityScale);
  };
}

export default Game;