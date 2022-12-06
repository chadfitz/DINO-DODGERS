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

    const scoreLoc = { x:this.canvas.width/2, y:this.canvas.height/2 }
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "middle";
    this.ctx.font = "bold 200pt sans-serif";
    // this.ctx.font = "impact 200pt sans-serif";
    this.ctx.fillText(this.score, scoreLoc.x, scoreLoc.y);
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "forestgreen";
    this.ctx.lineWidth = 5;
    this.ctx.strokeText(this.score, scoreLoc.x, scoreLoc.y);

    const yourScoreLoc = { x:this.canvas.width/2, y:this.canvas.height/6 }
    this.ctx.font = "100px monospace";
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "forestgreen";
    this.ctx.lineWidth = 5;
    this.ctx.strokeText("YOUR SCORE:", yourScoreLoc.x, yourScoreLoc.y);
    this.ctx.fillText("YOUR SCORE:", yourScoreLoc.x, yourScoreLoc.y);

    const playAgainLoc = { x:this.canvas.width/2, y:this.canvas.height * 0.8333}
    this.ctx.font = "100px monospace";
    this.ctx.fillStyle = "black";
    this.ctx.strokeStyle = "forestgreen";
    this.ctx.lineWidth = 5;
    this.ctx.strokeText("CLICK TO PLAY AGAIN", playAgainLoc.x, playAgainLoc.y);
    this.ctx.fillText("CLICK TO PLAY AGAIN", playAgainLoc.x, playAgainLoc.y);
    // this.ctx.shadowColor = "slategray";
    // this.ctx.shadowOffsetX = 50;
    // this.ctx.shadowOffsetY = 50;
    // this.ctx.shadowBlur = 50;
  }
}

export default EndScreen;