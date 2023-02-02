import Level from "./level";
import CharacterOne from "./characterOne";
import CharacterTwo from "./characterTwo";
import LeftHazard from "./leftHazard";
import RightHazard from "./rightHazard";
import EndScreen from "./endScreen";
import InputHandler from "./inputHandler";
// import ClickHandler from "./clickHandler";after

class Game {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
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
    this.play();
    this.vel = RightHazard.vel;
  }
  
  scoreCounter(){
    this.scoreCounter = setInterval(()=>this.score += 1, 1000);
  }

  play(){
    this.level.drawBackground();

    this.characterOne.move(this.input.keys);
    this.characterTwo.move(this.input.keys);

    this.leftHazards.forEach(hazard => hazard.animate());
    this.rightHazards.forEach(hazard => hazard.animate());

    this.drawScore();

    const animate = requestAnimationFrame(this.play.bind(this));

    if (this.gameOver()){
      cancelAnimationFrame(animate);
      return new EndScreen(this.ctx, this.canvas, this.score);
    }
  }

  addLeftHazard(){
    this.leftHazards.push(new LeftHazard(this.ctx, this.canvas));
    
    this.leftHazardCounter = setInterval(() => {
      console.log("fart");
      this.leftHazards.push(new LeftHazard(this.ctx, this.canvas));
    }, 4500);
  }

  addRightHazard(){
    let newRH = new RightHazard(this.ctx, this.canvas);
    this.rightHazards.push(newRH);
    
    this.rightHazardCounter = setInterval(() => {
      console.log("fart");
      this.rightHazards.push(new RightHazard(this.ctx, this.canvas));
    }, 4500);
  }

  gameOver(){
    let gameOver = false;
    this.leftHazards.forEach(hazard => {
      if(
        hazard.x < this.characterOne.x + this.characterOne.width - 45 &&
        hazard.x + hazard.width > this.characterOne.x &&
        hazard.y + 115 < this.characterOne.y + this.characterOne.height - 7 &&
        hazard.y + hazard.height - 10 > this.characterOne.y + 7
      ) {
        gameOver = true;
        clearInterval(this.rightHazardCounter);
        clearInterval(this.leftHazardCounter);
      }
    })
    this.rightHazards.forEach(hazard => {
      if(
        hazard.x < this.characterTwo.x + this.characterTwo.width - 5 &&
        hazard.x + hazard.width > this.characterTwo.x + 10 &&
        hazard.y + 115 < this.characterTwo.y + this.characterTwo.height &&
        hazard.y + hazard.height > this.characterTwo.y + 5
      ) {
        gameOver = true;
        clearInterval(this.rightHazardCounter);
        clearInterval(this.leftHazardCounter);
      }
    })
    return gameOver;
  }
  
  drawScore(){
    const loc = { x: (this.canvas.width/2), y: (this.canvas.height)/5 };
    this.ctx.textAlign = "center";
    this.ctx.font = "bold 100pt sans-serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.score, loc.x, loc.y);
    this.ctx.strokeStyle = "forestgreen";
    this.ctx.lineWidth = 5;
    this.ctx.strokeText(this.score, loc.x, loc.y);
  }
}

export default Game