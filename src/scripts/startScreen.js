class StartScreen {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = "./src/backgrounds/start_screen_background_v2.png"
  }

  renderStartScreen(){
    this.background.onload = () => {
      // this.ctx.globalAlpha = 0.5;
      this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
      // this.ctx.globalAlpha = 1;
    }    
  }
}

export default StartScreen