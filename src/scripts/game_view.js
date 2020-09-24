const FreqAnalyzer = require("./freq_analyzer");
const Waylon = require("./waylon");

function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.freqAnalyzer = new FreqAnalyzer();
}

GameView.prototype.start = function start() {
  this.freqAnalyzer
    .getMediaDevices()
    .then(createAudioContext())
    .then(createAnalyzerNode())
    .then(getMicStream());
  this.waylon = this.game.add(
    new Waylon({
      freqAnalyzer: this.freqAnalyzer,
      game: this.game,
      position: [25, 150],
      sizeScale: 0.6,
      velocity: 3
    })
  );
  this.lastTime = 0;
  requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function animate(time) {
  const timeDelta = time - this.lastTime;

  this.game.step(timeDelta);
  this.game.draw(this.ctx);
  this.lastTime = time;
  requestAnimationFrame(this.animate.bind(this));
};
