//import Canvas from './scripts/canvas';
import Game from './scripts/game.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  // const ctx = canvas.getContext("2d");
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;

  new Game(canvas);
  // console.log(ctx);
})