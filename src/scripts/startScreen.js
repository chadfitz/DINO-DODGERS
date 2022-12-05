class StartScreen {
  constructor(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    // this.background = new Image();
    // this.background.src = "../backgrounds/space_red.jpg";
    // this.renderStartScreen();
    // this.background = document.getElementById("background");
    // this.renderStartScreen;
  }

  renderStartScreen(){
    this.background.onload = () => {
      // this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(background, 0, 0, this.canvas.width, this.canvas.height);
    }
    // const animate = requestAnimationFrame(this.renderStartScreen.bind(this));
    
  }
}

export default StartScreen