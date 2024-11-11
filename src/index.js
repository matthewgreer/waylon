import './styles/index.scss';
import Game from "./scripts/game";
import GameView from "./scripts/game_view";
import waylonTitleLogo from "./images/waylon-title-logo.svg";
import mgNetLinkIcon from "./images/mg-net-link-icon.png";
import mgNetLinkIconHover from "./images/mg-net-link-icon-hover.png";
import githubIcon from "./images/github-icon.png";
import githubIconHover from "./images/github-icon-hover.png";
import linkedinIcon from "./images/linkedin-icon.png";
import linkedinIconHover from "./images/linkedin-icon-hover.png";

document.addEventListener("DOMContentLoaded", () => {
  // ensure images are loaded
  document.querySelector(".waylon-logo").src = waylonTitleLogo;
  document.querySelector(".mg-net-link-icon").src = mgNetLinkIcon;
  document.querySelector(".mg-net-link-icon-hover").src = mgNetLinkIconHover;
  document.querySelector(".github-icon").src = githubIcon;
  document.querySelector(".github-icon-hover").src = githubIconHover;
  document.querySelector(".linkedin-icon").src = linkedinIcon;
  document.querySelector(".linkedin-icon-hover").src = linkedinIconHover;

  const canvas = document.getElementById("canvas");
  const game = new Game();
  canvas.width = game.dimensions[0];
  canvas.height = game.dimensions[1];
  const ctx = canvas.getContext('2d');
  new GameView(game, ctx).initialize();
});
