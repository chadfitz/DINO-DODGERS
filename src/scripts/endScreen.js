class EndScreen {
  constructor(ctx, canvas, score){
    this.ctx = ctx;
    this.canvas = canvas;
    this.score = score;

    this.renderEndScreen();
  }

  renderEndScreen(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);

    const loc = { x:this.canvas.width/2, y:this.canvas.height/2 }
    this.ctx.textAlign = "center";
    this.ctx.font = "bold 200pt sans-serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(this.score, loc.x, loc.y);
    this.ctx.strokeStyle = "forestgreen";
    this.ctx.lineWidth = 5;
    this.ctx.strokeText(this.score, loc.x, loc.y);
    // this.ctx.shadowColor = "slategray";
    // this.ctx.shadowOffsetX = 50;
    // this.ctx.shadowOffsetY = 50;
    // this.ctx.shadowBlur = 50;
  }
}

export default EndScreen;