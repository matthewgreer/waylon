class Modal {
  constructor(){
    this.modal = document.getElementById("modal");
  };

  show = () => {
    this.modal.style.display = "flex";
  }

  close = () => {
    this.modal.style.display = "none";
  }

  intro = () => {
    this.modal.innerHTML = `
      <div class="modal-content">
        <p class="story">As they began their 5,000 mile seasonal migration from tropical calving waters to their polar feeding zone...</p>
        <p class="story boom emphasis">Boom!</p>
        <p class="story">...<span class="emphasis">PetroChem, Inc.'s seismic blasting</span> stunned and disoriented a pod of humpback whales.
          By the time their ears had recovered poor baby <span class="emphasis">WAYLON</span>'s Momma was nowhere to be seen.</p><br />
        <p class="story"><span class="emphasis">Speak Whale to guide baby WAYLON along the dangerous journey to the safety of Momma's shadow.</span></p><br />
        <p class="instructions-heading emphasis">Instructions:</p>
        <ul class="instructions-list">
          <li class="instructions-text">If asked, please <span class="emphasis">allow the game to access your microphone</span> during play.</li>
          <li class="instructions-text"><span class="emphasis">Use your voice</span> to control WAYLON's movement.</li>
          <li class="instructions-text">If you've seen the movie about the missing clownfish, you may already have some idea how to <span class="emphasis">speak Whale</span>. If not, here are the basics:</li>
          <li class="instructions-text"><span class="emphasis">Rising pitches</span> (low to high on a musical scale) tell WAYLON to <span class="emphasis">swim upwards.</span></li>
          <li class="instructions-text"><span class="emphasis">Descending pitches</span> (high to low on a musical scale) tell WAYLON to <span class="emphasis">dive downwards.</span></li>
          <li class="instructions-text"><span class="emphasis">NOTE: WAYLON</span> responds to <span class="emphasis">pitch, not volume</span>. Yelling at baby whales is unkind and counterproductive.</li>
        </ul>
        <p></p>
        <button id="start-button" class="modal-button">Click to Start</button>
      </div>`;
      this.show();
  };

  gameOver = (predator) => {
    this.modal.innerHTML = 
      `<div class="modal-content">
        <p class="story">Oh No! You need to help Waylon avoid hungry ${predator.name}s.</p>
        <button id="reset-button" class="modal-button">Try Again</button>
      </div>`;
    this.show()
  };

  pause = () => {
    this.modal.innerHTML = 
      `<div class="modal-content">
        <button id="resume-button" class="modal-button">Resume</button>
      </div>`;
    this.show();
  };

};

export default Modal;