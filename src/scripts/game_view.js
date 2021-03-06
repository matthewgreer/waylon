import FreqAnalyzer from "./freq_analyzer";
import Score from "./score";
import Modal from "./modal";
import Waves from "./waves";
import Waylon from "./waylon";

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.endOfGame = false;
    this.score = new Score(this.game);
    this.modal = new Modal();
    this.modal.intro();
    this.modal.show();
    this.freqAnalyzer = new FreqAnalyzer();
    this.startButton = document.getElementById("start-button");
    this.pauseButton = document.getElementById("pause-button");
    this.stopButton = document.getElementById("stop-button");
    this.animReq;
    this.killer;
  }

  initialize = () => {
    this.clear();
    this.score.updateScore();
    this.startButton.addEventListener("click", this.start);
  }

  start = () => {
    this.startButton.removeEventListener("click", this.start);
    this.modal.close();
    this.freqAnalyzer.getMediaDevices();
    this.freqAnalyzer.createAudioContext();
    this.freqAnalyzer.createAnalyzerNode();
    this.freqAnalyzer.getMicStream();
    this.game.add(new Waves(0.5, [0, 0]));
    this.game.add(
      new Waylon({
        game: this.game,
        freqAnalyzer: this.freqAnalyzer,
        position: [25, 0],
        sizeScale: 0.6,
        velocity: 18,
      })
    );
    this.game.spawnTimer();
    this.game.paused = false;
    this.game.startProgressTally();
    this.pauseButton.addEventListener("click", this.pause);
    this.stopButton.addEventListener("click", this.stop);
    this.lastTime = 0;
    return (this.animReq = requestAnimationFrame(this.animate.bind(this)));
  };

  animate = (time) => {
    if (this.game.paused === false) {
      const timeDelta = time - this.lastTime;
      this.game.step(timeDelta);
      this.score.updateScore();
      this.checkPredation();
      if (this.endOfGame) {
        return this.endGame(this.killer, this.game.progressInFeet);
      } else {
        this.game.draw(this.ctx);
        this.lastTime = time;
        return (this.animReq = requestAnimationFrame(this.animate.bind(this)));
      }
    }
  };

  checkPredation = () => {
    for (let i = 0; i < this.game.enemies.length; i++) {
      const predator = this.game.enemies[i];
      if (predator.isEating(this.game.waylon)) {
        this.killer = predator;
        return this.endOfGame = true;
      }
    }
  };

  endGame = (predator, progress) => {
    this.clear();
    this.game.stopProgressTally();
    this.modal.gameOver(predator, progress);
    this.freqAnalyzer.audioCtxt
      .close()
      .then(
        document
          .getElementById("reset-button")
          .addEventListener("click", this.reset)
      );
  };

  reset = () => {
    // this.game.difficulty = 1;
    this.game.stopProgressTally();
    this.game.progressInFeet = 0;
    this.modal.intro();
    document
      .getElementById("start-button")
      .addEventListener("click", this.start);
  };

  stop = () => {
    this.clear();
    this.freqAnalyzer.resetFreqAnalyzer();
    this.modal.gameStop();
    return document
      .getElementById("game-reset-button")
      .addEventListener("click", this.reset);
  };

  clear = () => {
    cancelAnimationFrame(this.animReq);
    clearInterval(this.game.spawn);
    clearInterval(this.game.tick);
    this.game.progressInFeet = 0;
    this.game.waylon = [];
    this.game.enemies = [];
    this.game.tharSheBlows = [];
    this.game.waves = [];
    this.endOfGame = false;
    this.game.draw(this.ctx);
  };

  pause = () => {
    cancelAnimationFrame(this.animReq);
    this.game.paused = true;
    this.game.stopProgressTally();
    this.freqAnalyzer.audioCtxt.suspend().then(this.modal.pause());
    this.resumeButton = document.getElementById("resume-button");
    return this.resumeButton.addEventListener("click", this.resume);
  };

  resume = () => {
    this.resumeButton.removeEventListener("click", this.resume);
    this.lastTime = performance.now();
    this.game.paused = false;
    this.game.startProgressTally();
    this.freqAnalyzer.audioCtxt.resume().then(this.modal.close());
    return this.animate(this.lastTime);
  };

};
export default GameView;