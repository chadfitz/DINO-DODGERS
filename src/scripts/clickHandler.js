import Game from './game'
import StartScreen from './startScreen';

class ClickHandler{
  constructor(canvas, ctx){
  this.canvas = canvas;
  this.ctx = ctx;
  this.startScreen = new StartScreen(this.canvas, this.ctx);
  this.menuButtons = document.querySelector(".menu-buttons");
  this.playButton = document.getElementById("play-button");
  this.instructionsButton = document.getElementById("instructions-button");
  this.instructions = document.getElementById("instructions");
  this.difficultyButton = document.getElementById("difficulty-button");
  this.difficultySelect = document.getElementById("difficulty-select");
  this.sourcesButton = document.getElementById("sources-button");
  this.sources = document.getElementById("sources");
  this.backButton = document.getElementById("back-button");
  this.endScreenButtons = document.querySelector(".end-screen-buttons");
  this.playAgainButton = document.getElementById("play-again-button");
  this.backToMenuButton = document.getElementById("back-to-menu-button");
  this.music = document.getElementById("music");
  this.musicIcon = document.getElementById("music-icon");
  this.nextSongIcon = document.getElementById("next");
  this.prevSongIcon = document.getElementById("prev");
  this.musicSources = [
    "./src/music/ES_Tiger Tracks - Lexica.mp3",
    "./src/music/Monkeys-Spinning-Monkeys.mp3",
    "./src/music/makai-symphony-dragon-slayer.mp3",
    "./src/music/ES_Astrophage - Lupus Nocte.mp3"
    ];
  this.currentSong = 0;
  
  this.startScreen.renderStartScreen();

  this.playButton.addEventListener("click", () => {
    new Game(this.canvas, this.ctx);
    this.menuButtons.style.display = "none";
  })

  const canvasClick = (e)=>{
    this.ctx.drawImage(this.startScreen.background, 0, 0, this.canvas.width, this.canvas.height);
    this.backButton.style.display = "none";
    this.menuButtons.style.display = "block";
  }

  this.instructionsButton.addEventListener("click", () => {
    this.ctx.drawImage(this.instructions, 0, 0, this.canvas.width, this.canvas.height);
    canvas.addEventListener("click", canvasClick, { once: true });
    this.menuButtons.style.display = "none";
    this.backButton.style.display = "block";
  })

  this.backButton.addEventListener("click", () => {
    this.ctx.drawImage(this.startScreen.background, 0, 0, this.canvas.width, this.canvas.height);
    this.backButton.style.display = "none";
    this.menuButtons.style.display = "block";
  })

  this.difficultyButton.addEventListener("click", () => {
    this.ctx.drawImage(this.difficultySelect, 0, 0, this.canvas.width, this.canvas.height);
    canvas.addEventListener("click", canvasClick, { once: true });
    this.menuButtons.style.display = "none";
    this.backButton.style.display = "block";
  })

  this.sourcesButton.addEventListener("click", () => {
    this.ctx.drawImage(this.sources, 0, 0, this.canvas.width, this.canvas.height);
    canvas.addEventListener("click", canvasClick, { once: true });
    this.menuButtons.style.display = "none";
    this.backButton.style.display = "block";
  })

  this.playAgainButton.addEventListener("click", () => {
    new Game(this.canvas, this.ctx);
    this.menuButtons.style.display = "none";
    this.endScreenButtons.style.display = "none";
  })

  this.backToMenuButton.addEventListener("click", () => {
    this.ctx.drawImage(this.startScreen.background, 0, 0, this.canvas.width, this.canvas.height);
    this.backButton.style.display = "none";
    this.menuButtons.style.display = "block";
    this.endScreenButtons.style.display = "none";
  })

  this.musicIcon.addEventListener("click", () => {
    if (this.music.paused){
      this.music.play();
      this.musicIcon.src = "./src/icons/music.png";
    } else {
      this.music.pause();
      this.musicIcon.src = "./src/icons/music_off.png";
    }
  })

  this.nextSongIcon.addEventListener("click", () => {
    this.currentSong++;
    this.music.src = this.musicSources[this.currentSong % this.musicSources.length];
    this.music.play();
    this.musicIcon.src = "./src/icons/music.png";
  })

  this.prevSongIcon.addEventListener("click", () => {
    if(this.currentSong > 0){
      this.currentSong--;
    } else {
      this.currentSong = this.musicSources.length - 1;
    }
    this.music.src = this.musicSources[this.currentSong % this.musicSources.length];
    this.music.play();
    this.musicIcon.src = "./src/icons/music.png";
  })
  }
}

export default ClickHandler;