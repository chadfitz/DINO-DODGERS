const CONSTANTS = {
  MOVE_SPEED: 6,
  CHARACTER_WIDTH: 30,
  CHARACTER_HEIGHT: 30
}

//--load images?--
// const images = {};
// images.character = new Image();
// images.character.src = '...';

let characterX = 0;
// let characterSpeed = 6;

class Character {
  constructor(dimensions){
    this.dimensions = dimensions;
    this.width = CONSTANTS.CHARACTER_WIDTH;
    this.height = CONSTANTS.CHARACTER_HEIGHT;
    this.characterSpeed = CONSTANTS.MOVE_SPEED;
    // this.characterX = 0;
    // this.vel = 0;
  }

  // move(input){
  //   if (input === right){
  //     characterX += this.characterSpeed;
  //   } else if (input === left) {
  //     characterX -= this.characterSpeed;
  //   }
  // }

  animate(ctx){
    // this.move();
    this.drawCharacter(ctx);
    if (characterX < this.dimensions.width + this.width){
      characterX += CONSTANTS.MOVE_SPEED;
    } else {
      characterX = 0 - this.width;
    }
  }

  drawCharacter(ctx){
    // debugger;
    ctx.fillStyle = "blue";
    ctx.fillRect(characterX, 500, CONSTANTS.CHARACTER_WIDTH, CONSTANTS.CHARACTER_HEIGHT);
    //change this later!
  }

  //set boundaries so character don't go off canvas
  bounds(){
    return{
      left: this.width,
      right: this.width + CONSTANTS.CHARACTER_WIDTH
    }
  }

  //prevent movement outside of canvas
  atBoundary(){
    //...
  }
}

export default Character