class Level {
  constructor (ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
  }

  //render the background
  drawBackground(){
    this.ctx.fillStyle = "lightgreen";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  //render the game level
  animate(){
    this.drawBackground();
  }

  //returns true if either character hits a hazard
  // collideswith(characterOne, characterTwo){
  //   //...
  // }
}

export default Level