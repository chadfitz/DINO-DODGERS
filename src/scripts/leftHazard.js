class LeftHazard {
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = 0;
    this.y = this.canvas.height;
    this.hazardPics = ["./src/sprites/20-meteor.png"]
    this.hazard = new Image();
    this.hazard.src = this.hazardPics[Math.floor(Math.random() * this.hazardPics.length)];
    this.width = 20;
    this.height = 63;
    this.vel = 2;
  }

  drawHazard(){
    // this.ctx.clearRect(this.x, this.y, this.width, this.height);
    // this.ctx.fillStyle = "black";
    // this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(this.hazard, this.x, this.y, this.width, this.height);
    // console.log(this.vel);
  }

  animate(){
    this.drawHazard();
    if (this.y === 0) this.x = (Math.random() * this.canvas.width/2);
    if (this.y < this.canvas.height){
      this.y += this.vel;
    } else {
      this.y = 0;
    }
  }
}

export default LeftHazard;