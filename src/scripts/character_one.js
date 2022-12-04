class CharacterOne{
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = 108;
    this.height = 75;
    this.x = 0;
    this.y = this.canvas.height - this.height - 30;
    this.image = document.getElementById("base-dino-run")
    this.characterSpeed = 15;
  }

  move(input){
    if (input === "right" && this.x < (this.canvas.width/2 - this.width)){
      this.x += this.characterSpeed;
    } else if (input === "left" && this.x > 0) {
      this.x -= this.characterSpeed;
    }
  }

  drawCharacter(){
    this.ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
  }
}

export default CharacterOne;