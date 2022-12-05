import Level from "./level";
import CharacterOne from "./character_one";
import CharacterTwo from "./character_two";
import LeftHazard from "./left_hazard";
import RightHazard from "./right_hazard";
import EndScreen from "./end_screen";
import InputHandler from "./input";

class Game {
  constructor(canvas){
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.level = new Level(this.ctx, this.canvas);
    this.input = new InputHandler();
    this.characterOne = new CharacterOne(this.ctx, this.canvas);
    this.characterTwo = new CharacterTwo(this.ctx, this.canvas);
    this.leftHazards = [];
    this.rightHazards = [];
    this.score = 0;
    this.addLeftHazard();
    this.addRightHazard();
    this.gameOver();
    this.scoreCounter();
    this.setup();
  }
  
  setup() {
    this.score = 0;
    this.play();
  }
  
  scoreCounter(){
    this.scoreCounter = setInterval(()=>this.score += 1, 1000);
  }

  play(){
    this.level.animate();

    this.characterOne.move(this.input.keys);
    this.characterTwo.move(this.input.keys);

    this.leftHazards.forEach(hazard => hazard.animate());
    this.rightHazards.forEach(hazard => hazard.animate());

    this.drawScore();

    const animate = requestAnimationFrame(this.play.bind(this));

    // if (this.gameOver()){
    //   cancelAnimationFrame(animate);
    //   return new EndScreen(this.ctx, this.canvas, this.score);
    // }
  }

  addLeftHazard(){
    this.leftHazards.push(new LeftHazard(this.ctx, this.canvas));

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

  gameOver(){
    let gameOver = false;
    this.leftHazards.forEach(hazard => {
      if(
        hazard.x < this.characterOne.x + this.characterOne.width &&
        hazard.x + hazard.width > this.characterOne.x &&
        hazard.y < this.characterOne.y + this.characterOne.height &&
        hazard.y + hazard.height > this.characterOne.y
      ) gameOver = true;
    })
    this.rightHazards.forEach(hazard => {
        if(
          hazard.x < this.characterTwo.x + this.characterTwo.width &&
          hazard.x + hazard.width > this.characterTwo.x &&
          hazard.y < this.characterTwo.y + this.characterTwo.height &&
          hazard.y + hazard.height > this.characterTwo.y
        ) gameOver = true;
    })
    return gameOver;
  }
  
  drawScore(){
    const loc = { x: (this.canvas.width/2), y: (this.canvas.height)/8 };
    this.ctx.font = "bold 50pt sans-serif";
    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.score, loc.x, loc.y);
    //strokeStyle and linewidth are the color and width of the outline
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(this.score, loc.x, loc.y);
  }
}

export default Game