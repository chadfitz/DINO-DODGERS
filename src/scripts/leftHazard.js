class LeftHazard {
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = 0;
    this.y = -this.height;
    this.hazardPics = [
      "./src/sprites/meteor1.png", 
      "./src/sprites/meteor2.png", 
      "./src/sprites/meteor3.png"
    ];
    this.hazard = new Image();
    this.hazard.src = this.hazardPics[Math.floor(Math.random() * this.hazardPics.length)];
    this.width = 50;
    this.height = 157;
    this.vel = (Math.random() * 2) + 2;
  }

  drawHazard(){
    this.ctx.drawImage(this.hazard, this.x, this.y, this.width, this.height);
  }

  animate(){
    this.drawHazard();
    if (this.y === -this.height) this.x = (Math.random() * this.canvas.width/2);
    if (this.y < this.canvas.height){
      this.y += this.vel;
    } else {
      this.y = -this.height;
      this.vel = (Math.random() * 2) + 2;
    }
  }
}

export default LeftHazard;