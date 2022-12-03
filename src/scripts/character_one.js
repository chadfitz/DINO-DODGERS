const CONSTANTS = {
  CHARACTER_WIDTH: 30,
  CHARACTER_HEIGHT: 30,
  // MOVE_SPEED: 6,
  // MAX_SPEED: 24
}

//--load images?--
// const images = {};
// images.character = new Image();
// images.character.src = '...';

class CharacterOne {
  // constructor(dimensions){
  constructor(ctx, canvas, x, y){
    // this.dimensions = dimensions;
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = CONSTANTS.CHARACTER_WIDTH;
    this.height = CONSTANTS.CHARACTER_HEIGHT;
    this.characterSpeed = 15;
    // this.characterVel = 3;
    this.maxSpeed = 15;
    this.position = x;
    this.y = y;
  }

  move(input){
    if (input === "right" && this.position < (this.canvas.width/2 - this.width)){
      this.position += this.characterSpeed;
    } else if (input === "left" && this.position > 0) {
      this.position -= this.characterSpeed;
    }
  }

  drawCharacter(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.position, this.y, this.width, this.height);
    //change this later!
  }
}

export default CharacterOne