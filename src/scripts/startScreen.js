class StartScreen {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = "./src/backgrounds/start_screen_background_v2.png"
  }

  renderStartScreen(){
    this.background.onload = () => {
      this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);

      const textLoc = { x: this.canvas.width/2, y:this.canvas.height/8.75 }
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.font = "100px monospace";
      this.ctx.fillstyle = "black";
      this.ctx.strokeStyle = "forestgreen";
      this.ctx.linewidth = 5;
      this.ctx.fillText("CLICK TO START", textLoc.x, textLoc.y);
      this.ctx.strokeText("CLICK TO START", textLoc.x, textLoc.y);
    }    
  }
}

export default StartScreen