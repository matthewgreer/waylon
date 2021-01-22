class Score {
  constructor(game){
    this.score = document.getElementById("score");
    this.game = game;
    this.milesCovered = 0;
  };

  calculateMiles = () => {
    this.milesCovered = Math.floor(this.game.progressInFeet / 52.8) / 100;
    return this.milesCovered;
  };

  updateScore = () => {
    if (this.game.progressInFeet < 5280) {
      return this.score.innerHTML = `
        <div class="score-display">
          <div class="score-label">Feet Traveled:</div>
          
          <div class="score-numbers">${this.game.progressInFeet}</div>
        </div>
      `;
    }
    return this.score.innerHTML = `
      <div class="score-display">
        <div class="score-label">Miles Traveled: </div>
        <div class="score-numbers">${this.calculateMiles()}</div>
      </div>
    `;
  };

};

export default Score;