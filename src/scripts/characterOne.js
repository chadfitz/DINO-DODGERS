class CharacterOne{
  constructor(ctx, canvas){
    this.ctx = ctx;
    this.canvas = canvas;
    this.width = 108;
    this.height = 75;
    this.x = this.canvas.width*0.25;
    this.y = this.canvas.height - this.height - 30;
    this.image = document.getElementById("base-dino");
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 8;
    this.gameFrame = 0;
    this.staggerFrames = 14;
    this.characterSpeed = 0;
    this.characterMaxSpeed = 3;
    this.characterDirection = "right";

  }

  move(input){
    this.drawCharacter();
    if (input.includes('d') && this.x < (this.canvas.width/2 - this.width)){
      this.characterSpeed = this.characterMaxSpeed;
      this.x += this.characterSpeed;
      this.maxFrame = 7;
      this.frameY = 1;
      this.characterDirection = "right";
    } else if (input.includes('a') && this.x > 0) {
      this.characterSpeed = -this.characterMaxSpeed;
      this.x += this.characterSpeed;
      this.maxFrame = 7;
      this.frameY = 3;
      this.characterDirection = "left";
    } else if (!input.length && this.characterDirection === "right"){
      this.maxFrame = 8;
      this.frameY = 0;
    } else if (!input.length && this.characterDirection === "left"){
      this.maxFrame = 8;
      this.frameY = 2;
    }
  }

  drawCharacter(){
    this.ctx.drawImage(this.image, this.frameX * this.width, this.frameY * this.height, this.width, this.height, this.x, this.y, this.width, this.height);
    if (this.gameFrame % this.staggerFrames === 0){
      if (this.frameX < this.maxFrame) this.frameX++;
      else this.frameX = 0;
    }
    // this.ctx.strokeRect(this.x, this.y + 7, this.width - 45, this.height - 7);
    this.gameFrame++;
  }

}

export default CharacterOne;