const FreqAnalyzer = require("./freq_analyzer");
const Modal = require("./modal");
const Waylon = require("./waylon");

function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.modal = new Modal();
  this.freqAnalyzer = new FreqAnalyzer();
  this.stopButton = document.getElementById("stop-button");
  this.startButton = document.getElementById("start-button");
}

GameView.prototype.initialize = function initialize() {
  return document.addEventListener("click", this.start);
};

GameView.prototype.start = function start() {
  document.removeEventListener("click", this.start);
  this.modal.closeModal();
  this.freqAnalyzer
    .getMediaDevices()
    .then(createAudioContext())
    .then(createAnalyzerNode())
    .then(getMicStream())
  ;
  this.waylon = this.game.add(
    new Waylon({
      freqAnalyzer: this.freqAnalyzer,
      game: this.game,
      position: [25, 150],
      sizeScale: 0.6,
      velocity: 3
    })
  );
  this.stopButton.addEventListener("click", this.stop);
  this.lastTime = 0;
  return this.animReq = requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function animate(time) {
  const timeDelta = time - this.lastTime;
  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  this.lastTime = time;
  return this.animReq = requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.stop = function stop() {
  this.freqAnalyzer.audioCtxt.close()
    .then(cancelAnimationFrame(this.animReq()))
    .then(this.modal.showModal())
    .catch(location.reload())
  ;
  return this.initialize();
};

module.exports = GameView;