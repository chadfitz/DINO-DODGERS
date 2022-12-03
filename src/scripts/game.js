import Level from "./level";
import CharacterOne from "./character_one";
import CharacterTwo from "./character_two";
import LeftHazard from "./left_hazard";
import RightHazard from "./right_hazard";

class Game {
  //create new canvas and restart the game
  constructor(canvas){
    this.ctx = canvas.getContext('2d');
    // this.dimensions = { width: canvas.width, height: canvas.height };
    this.canvas = canvas;
    this.level = new Level(this.ctx, this.canvas);
    this.characterOne = new CharacterOne(this.ctx, this.canvas, (this.canvas.width*0.25), 500);
    this.characterTwo = new CharacterTwo(this.ctx, this.canvas, (this.canvas.width*0.75), 500);
    // this.hazard1 = new LeftHazard(this.ctx, this.canvas);
    // this.hazard2 = new RightHazard(this.ctx, this.canvas);
    this.leftHazards = [];
    this.rightHazards = [];
    this.score = 0;
    this.registerEvents();
    this.pause.bind(this);
    this.addLeftHazard();
    this.addRightHazard();
    this.restart();
  }
  
  //after game over, restart the game
  restart() {
    this.running = false;
    this.score = 0;
    
    this.play();
  }
  
  // binds the context of event handlers to the game class
  registerEvents(){
    this.boundClickHandler = this.click.bind(this);
    this.ctx.canvas.addEventListener("click", this.boundClickHandler);
  }
  
  click(){
    if (!this.running) this.play();
    else this.pause();
  }
  
  //start playing
  play(){
    this.running = true;
    this.animate();
    //add 1 to the score every second
    this.scoreCounter = setInterval(()=>this.score += 1, 1000);
  }
  
  //stop running animations and score counting
  pause(){
    clearInterval(this.scoreCounter);
    clearInterval(this.leftHazardCounter);
    this.running = false;
  }

  // gameOver(){
  //   return (!(this.characterOne.x > this.hazard1.x + this.hazard1.width ||
  //       this.characterOne.x + this.characterOne.width < this.hazard1.x ||
  //       this.characterOne.y > this.hazard1.y + this.hazard1.height ||
  //       this.characterOne.y + this.characterOne.height < this.hazard1.y
  //     ))
  // }

  animate(){
    //draw the level
    this.level.animate();

    //draw and move the characters
    this.characterOne.drawCharacter();
    this.characterTwo.drawCharacter();

    //create the falling hazards
    // this.hazard1.animate();
    // this.hazard2.animate();
    this.leftHazards.forEach(hazard => hazard.animate());
    this.rightHazards.forEach(hazard => hazard.animate());

    //check if game over => give player score => restart the game
    // if (this.gameOver()){
    //   alert(this.score);
    //   this.restart();
    // }

    //draw the score
    this.drawScore();

    const animate = requestAnimationFrame(this.animate.bind(this));
    //stop animations if game is not running
    if(!this.running){
      cancelAnimationFrame(animate);
    }
  }

  addLeftHazard(){
    this.leftHazards.push(new LeftHazard(this.ctx, this.canvas));
    console.log(this.leftHazards);
    console.log(this.rightHazards);

    this.leftHazardCounter = setInterval(() => {
      this.leftHazards.push(new LeftHazard(this.ctx, this.canvas));
      }, 7000);
  }

  addRightHazard(){
    this.rightHazards.push(new RightHazard(this.ctx, this.canvas));

    this.rightHazardCounter = setInterval(() => {
      this.rightHazards.push(new RightHazard(this.ctx, this.canvas));
      }, 7000);
  }

  drawScore(){
    const loc = { x: (this.canvas.width)/2, y: (this.canvas.height)/8 };
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