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
  
  const startScreen = new StartScreen(canvas, ctx);
  startScreen.renderStartScreen();

  const menuButtons = document.querySelector(".menu-buttons");
  const playButton = document.getElementById("play-button");
  const instructionsButton = document.getElementById("instructions-button");
  const difficultyButton = document.getElementById("difficulty-button");
  const sourcesButton = document.getElementById("sources-button");
  const backButton = document.getElementById("back-button");
  const endScreenButtons = document.querySelector(".end-screen-buttons");
  const playAgainButton = document.getElementById("play-again-button");
  const backToMenuButton = document.getElementById("back-to-menu-button");
  
  playButton.addEventListener("click", () => {
    const game = new Game(canvas, ctx);
    menuButtons.style.display = "none";
  })

  instructionsButton.addEventListener("click", () => {
    const instructions = document.getElementById("instructions");
    ctx.drawImage(instructions, 0, 0, canvas.width, canvas.height);
    menuButtons.style.display = "none";
    backButton.style.display = "block";  })

  backButton.addEventListener("click", () => {
    ctx.drawImage(startScreen.background, 0, 0, canvas.width, canvas.height);
    backButton.style.display = "none";
    menuButtons.style.display = "block";
  })

  difficultyButton.addEventListener("click", () => {
    const difficultySelect = document.getElementById("difficulty-select");
    ctx.drawImage(difficultySelect, 0, 0, canvas.width, canvas.height);
    menuButtons.style.display = "none";
    backButton.style.display = "block";
  })

  sourcesButton.addEventListener("click", () => {
    const sources = document.getElementById("sources");
    ctx.drawImage(sources, 0, 0, canvas.width, canvas.height);
    menuButtons.style.display = "none";
    backButton.style.display = "block";
  })

  playAgainButton.addEventListener("click", () => {
    const game = new Game(canvas, ctx);
    menuButtons.style.display = "none";
    endScreenButtons.style.display = "none";
  })

  backToMenuButton.addEventListener("click", () => {
    ctx.drawImage(startScreen.background, 0, 0, canvas.width, canvas.height);
    backButton.style.display = "none";
    menuButtons.style.display = "block";
    endScreenButtons.style.display = "none";
  })

  const music = document.getElementById("music");
  const musicIcon = document.getElementById("music-icon");
  const nextSongIcon = document.getElementById("next");
  const prevSongIcon = document.getElementById("prev");
  const musicSources = [
    "./src/music/ES_Tiger Tracks - Lexica.mp3",
    "./src/music/Monkeys-Spinning-Monkeys.mp3",
    "./src/music/makai-symphony-dragon-slayer.mp3",
    "./src/music/ES_Astrophage - Lupus Nocte.mp3"
    ];
  let currentSong = 0;

  // music.autoplay = true;
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
  
  nextSongIcon.addEventListener("click", () => {
    currentSong++;
    music.src = musicSources[currentSong % musicSources.length];
    music.play();
    musicIcon.src = "./src/icons/music.png";
  })

  prevSongIcon.addEventListener("click", () => {
    currentSong--;
    music.src = musicSources[currentSong % musicSources.length];
    music.play();
    musicIcon.src = "./src/icons/music.png";
  })
  

  document.body.style.backgroundImage = "url('./src/backgrounds/space.jpg')";
  document.body.style.backgroundSize = "cover";
})