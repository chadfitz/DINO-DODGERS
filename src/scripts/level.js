class Level {
  constructor (ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
  }

  drawBackground(){
    this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Level