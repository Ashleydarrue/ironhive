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
// function growFlower() {
//   setInterval(function(){ 
//     flowerHeight++
//     console.log(flowerHeight)
//     if (flowerHeight === 10){
//       alert('you suck')
//     }
//    }, 100);
// }

// growFlower()

// }

// let theGame = new Game();

// class Game{
//   constructor(){
//     this.beetle1Img='../image/stinkbug_1.png'
//     this.beetle2Img='../image/stinkbug_2.png'
//     this.beetle3Img='../image/stinkbug_3.png'
//     this.beetle4Img='../image/stinkbug_4.png'
//     this.beetle5Img='../image/stinkbug_5.png'
//     this.beetleArr=[this.beetle1Img,this.beetle2Img,this.beetle3Img,this.beetle4Img,this.beetle5Img];
//   }
  
//   createBeetle(){
//     this.beetleArr.forEach(function(element){
//       this.beetleArr.push(element);
//       });
        
//       this.beetleArr.forEach(function(bug){
//         let beetleX = 1400
//         let randY = Math.floor(Math.random() * 600) + 20
//         setInterval(function(){
//           let canvas = document.getElementById("canvas");
//           const ctx = canvas.getContext("2d");
//           ctx.clearRect(beetleX, randY, 45, 40)
//           beetleX -= 4
//           let beetle = new Image() ;
//           beetle.src = bug;
//           ctx.drawImage(beetle, beetleX,randY,45,40);
//         }, 50);      
//       });
      
      
//     }
//     killBeetle(){
//      onclick.remove(this.createBeetle);

//     }
    
//   }

//   let theGame = new Game();
//    theGame.createBeetle();