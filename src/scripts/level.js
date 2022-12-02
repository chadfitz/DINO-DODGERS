export default class Level {
  constructor (dimensions){
    this.dimensions = dimensions;
  }

  //render the background
  drawBackground(ctx){
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
  }

  //render the game level
  animate(ctx){
    this.drawBackground(ctx);
  }

  //returns true if either character hits a hazard
  collideswith(characterOne, characterTwo){
    //...
  }
}
