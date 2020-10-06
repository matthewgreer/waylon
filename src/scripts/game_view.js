import FreqAnalyzer from "./freq_analyzer";
import Modal from "./modal";
import Waves from "./waves";
import Waylon from "./waylon";

class GameView {
  constructor(game, ctx){
    this.ctx = ctx;
    this.game = game;
    this.modal = new Modal();
    this.modal.intro();
    this.modal.show();
    this.freqAnalyzer = new FreqAnalyzer();
    this.startButton = document.getElementById("start-button");
    this.pauseButton = document.getElementById("pause-button");
    this.stopButton = document.getElementById("stop-button");
  }

  initialize = () => this.startButton.addEventListener("click", this.start);

  // closeModal = () => this.modal.id = "modal-hidden";

  // showModal = () => this.modal.id = "modal-shown";

  start = () => {
    this.startButton.removeEventListener("click", this.start);
    this.modal.close();
    this.freqAnalyzer.getMediaDevices();
    this.freqAnalyzer.createAudioContext();
    this.freqAnalyzer.createAnalyzerNode();
    this.freqAnalyzer.getMicStream();
    this.game.add(
      new Waves(.5, [0, 0])
    );
    this.game.add(
      new Waylon({
        game: this.game,
        freqAnalyzer: this.freqAnalyzer,
        position: [25, 0],
        sizeScale: .6,
        velocity: 18
      })      
    );
    this.game.spawnTimer();
    // this.pauseButton.addEventListener("click", this.pause)
    this.stopButton.addEventListener("click", this.stop);
    this.lastTime = 0;
    return this.animReq = requestAnimationFrame(this.animate.bind(this));
  };

  animate = (time) => {
    const timeDelta = time - this.lastTime;
    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;
    return this.animReq = requestAnimationFrame(this.animate.bind(this));
  };

  reset = () => {
    clearInterval(this.game.tick);
    this.game.difficulty = 0;
    this.modal.intro();
    this.modal.show();
    return this.initialize();
  };

  stop = () => {
    this.freqAnalyzer.audioCtxt.close()
      .then(cancelAnimationFrame(this.animReq))
      .catch(location.reload());
    return this.reset();
  };
};
export default GameView;

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