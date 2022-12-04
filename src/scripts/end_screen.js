class EndScreen {
  constructor(ctx, canvas, score){
    this.ctx = ctx;
    this.canvas = canvas;
    this.score = score;

    this.renderEndScreen();
  }

  renderEndScreen(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "lightgreen";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const loc = { x:this.canvas.width/2, y:this.canvas.height/2 }
    this.ctx.font = "bold 100 pt sans-serif";
    this.ctx.fillStyle = "black";
    this.ctx.textAlign = "center";
    this.ctx.fillText(this.score, loc.x, loc.y);
    this.ctx.strokestyle = "white";
    this.ctx.lineWidth = 2;
    this.ctx.strokeText(this.score, loc.x, loc.y);
    console.log(this.ctx);
  }
}

export default EndScreen;