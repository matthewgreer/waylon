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
        <div class="score-display">Feet Traveled: <span class="score-numbers">${this.game.progressInFeet}</span></div>
      `;
    }
    return this.score.innerHTML = `
      <div class="score-display">Miles Traveled: <span class="score-numbers">${this.calculateMiles()}</span></div>
    `;
  };

};

export default Score;