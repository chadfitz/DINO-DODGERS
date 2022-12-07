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
  
  this.startScreen.renderStartScreen();

  this.playButton.addEventListener("click", () => {
    const game = new Game(this.canvas, this.ctx);
    this.menuButtons.style.display = "none";
  })

  this.instructionsButton.addEventListener("click", () => {
    this.ctx.drawImage(instructions, 0, 0, this.canvas.width, this.canvas.height);
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
    this.menuButtons.style.display = "none";
    this.backButton.style.display = "block";
  })

  this.sourcesButton.addEventListener("click", () => {
    this.ctx.drawImage(this.sources, 0, 0, this.canvas.width, this.canvas.height);
    this.menuButtons.style.display = "none";
    this.backButton.style.display = "block";
  })

  this.playAgainButton.addEventListener("click", () => {
    const game = new Game(this.canvas, this.ctx);
    this.menuButtons.style.display = "none";
    this.endScreenButtons.style.display = "none";
  })

  this.backToMenuButton.addEventListener("click", () => {
    this.ctx.drawImage(this.startScreen.background, 0, 0, this.canvas.width, this.canvas.height);
    this.backButton.style.display = "none";
    this.menuButtons.style.display = "block";
    this.endScreenButtons.style.display = "none";
  })
  }
}

export default ClickHandler;