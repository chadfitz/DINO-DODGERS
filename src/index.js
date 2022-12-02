//import Canvas from './scripts/canvas';
import Game from './scripts/game.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  // const ctx = canvas.getContext("2d");
  // console.log(ctx);

  new Game(canvas);
  console.log(ctx);

  // const charOne = new Image();
  // charOne.src = '';
})