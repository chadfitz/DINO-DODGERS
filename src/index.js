import Game from './scripts/game.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.style.boxShadow = "1px 1px 6px 6px lightgray";
  // const ctx = canvas.getContext("2d");
  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;

  const game = new Game(canvas);

  //add event listeners
  // canvas.addEventListener("click", () => game.pause);
  
  function keydown(e){
    e.preventDefault();
    if (e.key === "ArrowRight") {
        game.characterTwo.move("right");
    }
    if (e.key === "ArrowLeft") {
      game.characterTwo.move("left");
    }
    if (e.key === "d") {
      game.characterOne.move("right");
    }
    if (e.key === "a") {
      game.characterOne.move("left");
    }
  }

  document.addEventListener("keydown", keydown)
})