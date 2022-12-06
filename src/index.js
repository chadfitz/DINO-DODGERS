import Game from './scripts/game.js';
import StartScreen from './scripts/startScreen.js';

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.width = window.innerWidth * 0.67;
  canvas.height = window.innerHeight * 0.67;
  canvas.style.boxShadow = "1px 1px 6px 6px slategray";
  const ctx = canvas.getContext("2d");

  const background = document.getElementById("background");
  background.width = canvas.width;
  background.height = canvas.height;

  const musicIcon = document.getElementById("music-icon");
  const music = document.getElementById("music");

  music.autoplay = true;
  // music.load();

  musicIcon.addEventListener("click", () => {
    if (music.paused){
      music.play();
      musicIcon.src = "./src/icons/music.png";
    } else {
      music.pause();
      musicIcon.src = "./src/icons/music_off.png";
    }
  })

  const startScreen = new StartScreen(canvas, ctx);
  startScreen.renderStartScreen();

  canvas.addEventListener("click", () => {
    const game = new Game(canvas, ctx);
  })


  document.body.style.backgroundImage = "url('./src/backgrounds/space.jpg')";
  document.body.style.backgroundSize = "cover";
})