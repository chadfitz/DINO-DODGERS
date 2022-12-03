import Character from "./characters";
import Level from "./level";

class Game {
  //create new canvas and restart the game
  constructor(canvas){
    // this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.score = 0;
    this.registerEvents();
    this.restart();
  }
  
  //after game over, restart the game
  restart() {
    this.running = false;
    this.score = 0;
    this.characterOne = new Character(this.dimensions);
    // this.characterTwo = new Character();
    this.level = new Level(this.dimensions);
    
    this.animate();
  }
  
  //binds the context of event handlers to the game class
  registerEvents(){
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("click", this.boundClickHandler);

    this.boundKeydownHandler = this.keydown.bind(this);
    console.log(this.boundKeydownHandler)
    this.ctx.canvas.addEventListener("keydown", this.boundKeydownHandler)
  }

  keydown(e){
    console.log(e)
    if (!this.running) {
      this.play();
    }
  }
    // else {
  //     if (e.code === "ArrowRight") {
  //       this.characterOne.move(right)
  //     }
  //     else if (e.code === "ArrowLeft") {
  //       this.characterOne.move(left)
  //     }
  //     }
  //   }
  // }
  
  click(e){
    if (!this.running) this.play();
    else this.pause();
  }
  
  //start playing
  play(){
    this.running = true;
    this.animate();
    //add 1 to the score every second
    this.counter = setInterval(()=>this.score += 1, 1000);
  }
  
  //stop running animations and score counting
  pause(){
    //addEventListener?
    clearInterval(this.counter);
    this.running = false;
  }

  // gameOver(){
  //   return (
  //     this.level.collidesWith(this.characterOne.bounds()) ||
  //     this.level.collidesWith(this.characterTwo.bounds())
  //   );
  // }

  animate(){
    //draw the level
    this.level.animate(this.ctx);

    //draw and move the characters
    this.characterOne.animate(this.ctx);
    // this.characterTwo.animate(this.ctx);

    //check if game over => give player score => restart the game
    // if (this.gameOver()){
    //   alert(this.score);
    //   this.restart();
    // }

    //draw the score
    this.drawScore();

    //stop animations if game is not running
    if (this.running){
      //calls the function again after very short delay (~1/60 sec)
      requestAnimationFrame(this.animate.bind(this));
    }
    // this.animate();
  }

  //clearInterval(<varname>)
  drawScore(){
    //location width and height are based off of canvas dimensions
    const loc = { x: (this.dimensions.width)/2, y: (this.dimensions.height)/8 };
    // const loc = { x: 50, y: 50 }
    this.ctx.font = "bold 50pt sans-serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.score, loc.x, loc.y);
    //strokeStyle and linewidth are the color and width of the outline
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(this.score, loc.x, loc.y);
  }
}

export default Game