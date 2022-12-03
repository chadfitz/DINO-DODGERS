class CharacterTwo {
  // constructor(dimensions){
  constructor(ctx, canvas, x, y){
    // this.dimensions = dimensions;
    this.ctx = ctx;
    this.canvas = canvas;
    this.position = x;
    this.y = y;
    this.width = 30;
    this.height = 30;
    this.characterSpeed = 15;
  }

  move(input){
    if (input === "right" && this.position < (this.canvas.width - this.width)){
      this.position += this.characterSpeed;
    } else if (input === "left" && this.position > this.canvas.width/2 + this.width/2) {
      this.position -= this.characterSpeed;
    }

  }

  drawCharacter(){
    // debugger;
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.position, this.y, this.width, this.height);
    //change this later!
  }
}

export default CharacterTwo