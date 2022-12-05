class Level {
  constructor (ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
  }

  drawBackground(){
    // this.ctx.fillStyle = "lightgreen";
    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
  }

  animate(){
    this.drawBackground();
  }
}

export default Level