class RightHazard {
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = this.canvas.width;
    this.y = this.canvas.height/8;
    this.width = 15;
    this.height = 15;
    this.vel = 2;
  }

  drawHazard(){
    // this.ctx.clearRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    // console.log(this.vel);
  }

  animate(){
    this.drawHazard();
    if (this.y === 0) this.x = (Math.random() * this.canvas.width/2) + this.canvas.width/2;
    if (this.y < this.canvas.height) {
      this.y += this.vel;
    } else {
      this.y = 0;
    }
  }
}

export default RightHazard;