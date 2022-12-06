class Level {
  constructor (ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.background = new Image();
    this.background.src = "./src/backgrounds/game_background.jpg"
  }

  drawBackground(){
    this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Level