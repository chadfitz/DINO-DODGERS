import Canvas from './scripts/canvas';

document.addEventListener("DOMContentLoaded", () => {
  // const canvas = new Canvas();
  // console.log(canvas);
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  console.log(ctx);

  const charOne = new Image();
  // charOne.src = '';

  function animate(){
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillRect(0, 0, 50, 50);
    requestAnimationFrame(animate());
  }
  animate();
})