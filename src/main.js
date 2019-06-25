let allTheBeetles = [];
window.onload = function () {
  ctx = document.getElementById('canvas').getContext('2d');
  


  class Beetle {
    constructor(beetleX, beetleY, beetleWidth, beetleHeight) {
      this.x = beetleX;
      this.y = beetleY;
      this.width = beetleWidth;
      this.height = beetleHeight;
      this.images = ['../image/stinkbug_1.png', '../image/stinkbug_2.png', '../image/stinkbug_3.png', '../image/stinkbug_4.png', '../image/stinkbug_5.png', '../image/stinkbug_4.png', '../image/stinkbug_3.png', '../image/stinkbug_2.png'];
      this.image = this.images[0];
      this.counter = -1;
      this.direction = 1;
    }
    drawItself() {
      this.counter++;

      this.image = this.images[this.counter];

      if (this.counter == 7) {
        this.counter = -1
      }

      let theImage = new Image();
      theImage.src = this.image;

      ctx.drawImage(theImage, this.x, this.y, 45, 50);
    }

    moveAcrossForever() {
      setInterval(() => {
        this.x -= 4;

        if (this.direction == 2) {
          this.y -= 4
        }
        if (this.direction == 0) {
          this.y += 4
        }

        let randomNum = Math.floor(Math.random() * 12)
        if (randomNum == 0 || randomNum == 2) {
          if (this.direction == 2) {
            this.direction--
          } else if (this.direction == 0) {
            this.direction++
          } else {
            this.direction = randomNum
          }
        }
      }, 200)
    }
  }

  function drawEverything() {
    
    allTheBeetles.forEach((eachBeetle) => {
      eachBeetle.drawItself();
      
    })
    flower.drawFlower();
  }


  function animate() {
    ctx.clearRect(0, 0, 1430, 675);
    let randomNum = Math.floor(Math.random() * 50)
    let randomY = Math.floor(Math.random() * 675)
    if (randomNum === 2) {
      let beetles = new Beetle(1430, randomY, 45, 50);
      allTheBeetles.push(beetles);
      beetles.moveAcrossForever();
    }
    drawEverything();
    requestAnimationFrame(animate);
  }

  setTimeout(()=>{
    animate();
  }, 5000)
  

 let hitNum = 0;

  /// make this a game class
  canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    console.log(Math.floor(mousePos.x) + ',,,,,,,' + Math.floor(mousePos.y));
    for (let i = 0; i < allTheBeetles.length; i++) {
      // console.log("------- ", allTheBeetles[i].x, allTheBeetles[i].y, allTheBeetles[i].width, allTheBeetles[i].height);
      if (Math.floor(mousePos.x) < allTheBeetles[i].x + (allTheBeetles[i].width) && Math.floor(mousePos.x) > allTheBeetles[i].x && Math.floor(mousePos.y) < allTheBeetles[i].y + (allTheBeetles[i].height - 7) && Math.floor(mousePos.y) > allTheBeetles[i].y) {
        allTheBeetles.splice(i, 1) 
        hitNum++
        document.getElementById('hit').innerHTML= hitNum
      }
    }
  }, false);

  //Get Mouse Position
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

// sunflower 

  class Sunflower {
    constructor(sunflowerX, sunflowerY, sunflowerWidth, sunflowerHeight) {
      this.x = sunflowerX;
      this.y = sunflowerY;
      this.width = sunflowerWidth;
      this.height = sunflowerHeight;
      this.images = ['./../image/sunflower1.png' , './../image/sunflower2.png', "./../image/sunflower3.png", "./../image/sunflower4.png", "./../image/sunflower5.png"];
      this.image = this.images[0];
      this.counter = -1;
    }

    drawFlower() {
      this.counter++;

      this.image = this.images[this.counter];

      if (this.counter == 4) {
        this.counter = -1
      }

      let theImage = new Image();
      theImage.src = this.image;

      ctx.drawImage(theImage, 200, 1400, 100, 150);
    }

  }
  let flower = new Sunflower(200,1400, 50,50);
}