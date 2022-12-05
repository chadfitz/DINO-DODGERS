class StartScreen {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
  }

  renderStartScreen(){
    background.onload = () => {
      this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
    }    
  }
}

export default StartScreen