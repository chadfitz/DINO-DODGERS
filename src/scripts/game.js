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
    this.addLeftHazard();
    this.addRightHazard();
    this.setup();
  }
  
  //after game over, setup the game
  setup() {
    this.score = 0;
    this.play();
  }
  
  //start playing
  play(){
    this.animate();
    //add 1 to the score every second
    this.scoreCounter = setInterval(()=>this.score += 1, 1000);
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

    //cancelAnimationFrame(animate);

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