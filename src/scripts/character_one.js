class CharacterOne {
  constructor(ctx, canvas, x, y){
    this.ctx = ctx;
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.characterSpeed = 15;
    this.maxSpeed = 15;
  }

  move(input){
    if (input === "right" && this.x < (this.canvas.width/2 - this.width)){
      this.x += this.characterSpeed;
    } else if (input === "left" && this.x > 0) {
      this.x -= this.characterSpeed;
    }
  }

  drawCharacter(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    //change this later!
  }
}

export default CharacterOne