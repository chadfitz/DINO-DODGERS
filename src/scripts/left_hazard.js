class LeftHazard {
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = 0;
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

  move(){
    this.drawHazard();
    if (this.y === this.canvas.height/8) {
      if (this.x < this.canvas.width * 0.333) this.x += this.vel;
      else {
        this.y += this.vel;
        this.x = (Math.random() * this.canvas.width/2);
      }
    } else {
      this.y += this.vel;
    }
    if (this.y >= this.canvas.height) {
      this.x = 0;
      this.y = this.canvas.height/8;
    }
  }
}

export default LeftHazard;