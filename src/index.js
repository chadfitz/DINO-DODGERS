import StartScreen from './scripts/startScreen.js';
import ClickHandler from './scripts/clickHandler.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.width = window.innerWidth * 0.67;
  canvas.height = window.innerHeight * 0.67;
  canvas.style.boxShadow = "1px 1px 6px 6px slategray";
  const ctx = canvas.getContext("2d");

  const background = document.getElementById("background");
  background.width = canvas.width;
  background.height = canvas.height;
  
  const startScreen = new StartScreen(canvas, ctx);
  startScreen.renderStartScreen();

  const clickHandler = new ClickHandler(canvas, ctx);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth * 0.67;
    canvas.height = window.innerHeight * 0.67;
    ctx.drawImage(startScreen.background, 0, 0, canvas.width, canvas.height);
  })

  document.body.style.backgroundImage = "url('./src/backgrounds/space.jpg')";
  document.body.style.backgroundSize = "cover";
})