import { IdleRight } from "./characterStates";

const animationStates = [
  { name: "idle", frames: 9 },
  { name: "run", frames: 8 },
]

class CharacterOne{
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = 102.77778;
    this.height = 75;
    this.x = this.canvas.width*0.25;
    this.y = this.canvas.height - this.height - 30;
    this.image = document.getElementById("base-dino")
    this.frameX = 0;
    this.frameY = 0;
    // this.gameFrame = 0;
    // this.staggerFrames = 10;
    this.characterSpeed = 0;
    this.characterMaxSpeed = 15;
    this.states = [new IdleRight(this)];
    this.currentState = this.states[0];
    this.currentState.enter();
  }

  move(input){
    this.drawCharacter();
    if (input.includes('d') && this.x < (this.canvas.width/2 - this.width)){
      this.characterSpeed = this.characterMaxSpeed;
      this.x += this.characterSpeed;
    } else if (input.includes('a') && this.x > 0) {
      this.characterSpeed = -this.characterMaxSpeed;
      this.x += this.characterSpeed;
    }
  }

  drawCharacter(){
    //   ctx.drawImage(image, source.x, s.y, s.width, s.height, destination.x, dy., d.width, d.height)
    //which area to crop out from sprite sheet, then where to display that cropped out section on the canvas
    // let position = Math.floor(this.gameFrame/this.staggerFrames) % 7;
    // this.spriteFrameX = this.width * position;
    this.ctx.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    // this.ctx.drawImage(this.image, this.spriteFrameX*this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    // if (this.gameFrame % this.staggerFrames === 0){
    //   if (this.spriteFrameX < 8) this.spriteFrameX++;
    //   else this.spriteFrameX = 0;
    // }
    // this.gameFrame++;
  }
}

export default CharacterOne;