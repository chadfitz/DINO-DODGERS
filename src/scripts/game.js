import Character from "./characters";
import Level from "./level";

export default class Game {
  //create new canvas and restart the game
  constructor(canvas){
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.registerEvents();
    this.restart();
  }

  //start playing
  play() {
    this.running = true;
    this.animate();
  }

  //after game over, restart the game
  restart() {
    this.running = false;
    this.score = 0;
    this.characterOne = new Character(this.dimensions);
    this.characterTwo = new Character(this.dimensions);
    this.level = new Level(this.dimensions);

    this.animate();
  }

  //adding event listeners
  registerEvents(){
    //this.ctx.canvas.addEventListener("", )
  }

  //pause, stop running animations and score counting
  pause(){
    //addEventListener?
    this.running = false;
  }

  //you know
  gameOver(){
    return (
      this.level.collidesWith(this.characterOne.bounds()) ||
      this.level.collidesWith(this.characterTwo.bounds())
    );
  }

  animate(){
    //draw the level
    this.level.animate(this.ctx);

    //draw and move the characters
    this.characterOne.animate(this.ctx);
    this.characterTwo.animate(this.ctx);

    //check if game over => give player score => restart the game
    if (this.gameOver()){
      alert(this.score);
      this.restart();
    }

    //add 1 to the score every second
    setInterval(()=>score++, 1000);

    //draw the score
    this.drawScore();

    //stop animations if game is not running
    if (this.running){
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  drawScore(){
    //location width and height are based off of canvas dimensions
    const loc = { x: (this.dimensions.width)/2, y: (this.dimensions.height)/8 };
    this.ctx.font = "bold 50pt sans-serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(this.score, loc.x, loc.y);
    //strokeStyle and linewidth are the color and width of the outline
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(this.score, loc.x, loc.y);
  }
}