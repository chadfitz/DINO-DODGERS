class InputHandler{
  constructor(){
    this.keys = [];
    window.addEventListener('keydown', e => {
      if (( e.key === 'd' ||
            e.key === 'a' ||
            e.key === 'ArrowRight' ||
            e.key === 'ArrowLeft'
          ) && this.keys.indexOf(e.key) === -1){
          this.keys.push(e.key);
      }
      console.log(e.key, this.keys);
    })
    window.addEventListener('keyup', e => {
      if ( e.key === 'd' ||
           e.key === 'a' ||
           e.key === 'ArrowRight' ||
           e.key === 'ArrowLeft'
        ){
        this.keys.splice(this.keys.indexOf(e.key), 1)
      }
    })
  }
}

export default InputHandler;