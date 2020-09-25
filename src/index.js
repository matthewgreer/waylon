import './styles/index.scss';
import Game from "./scripts/game";
import GameView from "./scripts/game_view";

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("canvas");
  const game = new Game();
  canvas.width = game.dimensions[0];
  canvas.height = game.dimensions[1];
  const ctx = canvas.getContext('2d');
  new GameView(game, ctx).initialize();
});