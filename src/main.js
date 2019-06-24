window.onload = function() {
  let theGame = new Game();
   theGame.createBeetle();

   
   let background = new Image();

    background.onload = function(){
      let canvas = document.getElementById("canvas");
      background.src = "../image/hivebackground.jpg";
      ctx.drawImage(background,0,0);   
    }

}

