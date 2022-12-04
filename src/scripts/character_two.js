class CharacterTwo {
  constructor(ctx, canvas, x, y){
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = 60;
    this.height = 60;
    this.x = x;
    this.y = y;
    this.characterSpeed = 0;
    this.characterMaxSpeed = 15;
  }

  move(input){
    this.drawCharacter();
    if (input.includes('ArrowRight') && this.x < (this.canvas.width - this.width)){
      this.characterSpeed = this.characterMaxSpeed;
      this.x += this.characterSpeed;
    } else if (input.includes('ArrowLeft') && this.x > this.canvas.width/2 + this.width/2) {
      this.characterSpeed = -this.characterMaxSpeed
      this.x += this.characterSpeed;
    } else this.characterSpeed = 0;
  }

  drawCharacter(){
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //change this later!
  }
}

export default CharacterTwo