class StartScreen {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.background = new Image();
    this.background.src = "./src/backgrounds/start_screen_background.jpg"
  }

  renderStartScreen(){
    this.background.onload = () => {
      this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
    }    
  }
}

export default StartScreen