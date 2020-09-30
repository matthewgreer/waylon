import FreqAnalyzer from "./freq_analyzer";
import Waylon from "./waylon";

function GameView(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.modal = document.getElementById("modal-shown");
  this.freqAnalyzer = new FreqAnalyzer();
  this.stopButton = document.getElementById("stop-button");
  this.startButton = document.getElementById("start-button");
  this.start = this.start.bind(this);
}

GameView.prototype.initialize = function initialize() {
  return document.addEventListener("click", this.start);
};

GameView.prototype.closeModal = function closeModal() {
  return this.modal.id = "modal-hidden";
};

GameView.prototype.showModal = function showModal() {
  return this.modal.id = "modal-shown";
};

GameView.prototype.start = function start() {
  document.removeEventListener("click", this.start);
  this.closeModal();
  this.freqAnalyzer.getMediaDevices();
  this.freqAnalyzer.createAudioContext();
  this.freqAnalyzer.createAnalyzerNode();
  this.freqAnalyzer.getMicStream();
  debugger
  this.game.add(
    new Waylon({
      game: this.game,
      freqAnalyzer: this.freqAnalyzer,
      position: [25, 0],
      sizeScale: 0.6,
      velocity: 3
    })
  );
  this.stopButton.addEventListener("click", this.stop);
  this.lastTime = 0;
  debugger
  return this.animReq = requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.animate = function animate(time) {
  const timeDelta = time - this.lastTime;
  debugger
  this.game.step(timeDelta);
  debugger
  this.game.draw(this.ctx);
  debugger
  this.lastTime = time;
  return this.animReq = requestAnimationFrame(this.animate.bind(this));
};

GameView.prototype.stop = function stop() {
  this.freqAnalyzer.audioCtxt.close()
    .then(cancelAnimationFrame(this.animReq))
    .then(this.modal.showModal())
    .catch(location.reload())
  ;
  return this.initialize();
};

export default GameView;

/*


Modal.prototype.showModal = function showModal(){
  this.instructions.id = "modal-shown";


*/


// This code is vestigial, leftover from experimentation
// It is left here in case I need to reference it
              // document.addEventListener(
              //   "DOMContentLoaded",
              //   () => {
              //     let x = 1920;
              //     let i = 0;
              //     let y = Math.floor(Math.random() * 650);
              //     let prevY = 0;
              //     let reps = 8;
              //     let speed = Math.floor(Math.random() * 5) + 3;
              //     let scale = Math.random();

              //     let tick = setInterval(() => {
              //       drawShark(x, y, scale);

              //       const stop = () => {
              //         clearInterval(tick);
              //       };

              //       if (i >= reps) {
              //         stop();
              //       }

              //       if (x <= -862) {
              //         x = 1920;
              //         i = i + 1;
              //         speed = Math.floor(Math.random() * 5) + 3;
              //         scale = Math.random();
              //         if (prevY < 300) {
              //           y = prevY + Math.floor(Math.random() * 350);
              //         } else {
              //           y = Math.floor(Math.random() * 400);
              //         }
              //       }

              //       x = x - speed;
              //     });
              //   },
              //   200
              // );