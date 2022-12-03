class CharacterTwo {
  constructor(ctx, canvas, x, y){
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.characterSpeed = 15;
  }

  move(input){
    if (input === "right" && this.x < (this.canvas.width - this.width)){
      this.x += this.characterSpeed;
    } else if (input === "left" && this.x > this.canvas.width/2 + this.width/2) {
      this.x -= this.characterSpeed;
    }

  }

  drawCharacter(){
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //change this later!
  }
}

export default CharacterTwo