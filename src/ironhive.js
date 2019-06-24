// class sunflower {
//   constructor() {
//     this.health = 50;
//   }
//   draw() {
//     let canvas = document.getElementById("canvas")
//     const ctx = canvas.getContext("2d");
//     let sunImg = new Image();
//     img.src = '../image/sunflower.png';
//     ctx.drawImage(sunImg, 200, 99, 400, 400);

//     requestAnimationFrame(draw);
  
//   }
 
// }

// let theGame = new Game();

class Game{
  constructor(){
    this.beetle1Img='../image/stinkbug_1.png'
    this.beetle2Img='../image/stinkbug_2.png'
    this.beetle3Img='../image/stinkbug_3.png'
    this.beetle4Img='../image/stinkbug_4.png'
    this.beetle5Img='../image/stinkbug_5.png'
    this.beetleArr=[this.beetle1Img,this.beetle2Img,this.beetle3Img,this.beetle4Img,this.beetle5Img];
  }
  
  createBeetle(){
    this.beetleArr.forEach(function(element){
      console.log(theGame.beetleArr)

      let beetleX = 1300
      let randY = Math.floor(Math.random() * 625) + 20
      setInterval(function(){
        beetleX -= 2

        let canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        let beetle = new Image() ;
         beetle.src = element;
         ctx.drawImage(beetle, beetleX,randY,45,40);
 
         
        }, 50);
        //  requestAnimationFrame(createBeetle);
        theGame.beetleArr.push(theGame.beetle1Img);
       
      });
      
      
      
    }
    killBeetle(){

    }
    
  }
  let theGame = new Game();
   theGame.createBeetle();