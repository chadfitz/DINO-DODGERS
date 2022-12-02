const CONSTANTS = {
  // GRAVITY: ,
  MOVE_SPEED: 8,
  // TERMINAL_VEL: ,
  CHARACTER_WIDTH: 60,
  CHARACTER_HEIGHT: 30
}

export default class Character {
  constructor(){//(dimensions){
    // this.dimensions = dimensions;
    // this.vel = 0;
    this.x = CONSTANTS.CHARACTER_WIDTH;
    this.y = CONSTANTS.CHARACTER_HEIGHT;
  }

  move(){
    // this.x += this.vel;
  }

  animate(ctx){
    // this.move();
    this.drawCharacter(ctx);
  }

  drawCharacter(ctx){
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, CONSTANTS.CHARACTER_WIDTH, CONSTANTS.CHARACTER_HEIGHT);
    //change this later!
  }

  //set boundaries so character don't go off canvas
  bounds(){
    return{
      left: this.x,
      right: this.x + CONSTANTS.CHARACTER_WIDTH
    }
  }

  //prevent movement outside of canvas
  atBoundary(){
    //...
  }
}