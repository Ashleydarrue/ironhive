let allTheBeetles = [];
window.onload = function () {
  ctx = document.getElementById('canvas').getContext('2d');

  class Beetle {
    constructor(beetleX, beetleY, beetleWidth, beetleHeight) {
      this.x = beetleX;
      this.y = beetleY;
      this.width = beetleWidth;
      this.height = beetleHeight;
      this.images = ['./image/stinkbug_1.png', './image/stinkbug_2.png', './image/stinkbug_3.png', './image/stinkbug_4.png', './image/stinkbug_5.png', './image/stinkbug_4.png', './image/stinkbug_3.png', './image/stinkbug_2.png'];
      this.image = this.images[0];
      this.counter = -1;
      this.direction = 1;
      this.frames = 1;
    }
    squish() {
      this.image = "./image/bugsquished.png"
    }
    drawItself() {
      if (this.images.includes(this.image)) {
        this.counter++;
        this.image = this.images[this.counter];
        if (this.counter == 7) {
          this.counter = -1
        }
      }
      let theImage = new Image();
      theImage.src = this.image;
      ctx.drawImage(theImage, this.x, this.y, 45, 50);
    }
    moveAcrossForever() {
      let interval = 100
      setInterval(() => {

        if (this.frames % 70 == 0) {
          interval -= 10
        }
        this.x -= 4;
        if (this.direction == 2) {
          this.y -= 4
          if (this.y < 0) {
            this.y = 10;
          }
        }
        if (this.direction == 0) {
          this.y += 4
          if (this.y > 640) {
            this.y = 630;
          }
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
        this.frames++
      }, interval)
    }
  }

  // Detects Collision & Displays looser Image
  setInterval(() => {
    allTheBeetles.forEach((beetle) => {
      if (flower.x < (beetle.x + beetle.width) && flower.x + flower.width > beetle.x && flower.y < beetle.y + beetle.height && flower.y + flower.height > beetle.y) {
        $('.loose').css('display', 'inline');
        setTimeout(() => {
          location.reload()
        }, 5000)
      }
    })
  }, 50)


  // Draws Beettles & Sunflower on canvas
  function drawEverything() {
    allTheBeetles.forEach((eachBeetle) => {
      eachBeetle.drawItself();
    })
    flower.drawFlower();
  }

  // Animates the Sunflower & Beetles.
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

  // On Enter Starts Game
  window.onkeydown = function (e) {
    let key = e.keyCode ? e.keyCode : e.which;
    if (key === 13) {
      animate();
    }
  }

  // Deletes bugs on click.
  let hitNum = 0;
  canvas.addEventListener("click", function (evt) {
    var mousePos = getMousePos(canvas, evt);
    console.log(Math.floor(mousePos.x) + ',,,,,,,' + Math.floor(mousePos.y));
    for (let i = 0; i < allTheBeetles.length; i++) {
    
      if (Math.floor(mousePos.x) < allTheBeetles[i].x + (allTheBeetles[i].width) && Math.floor(mousePos.x) > allTheBeetles[i].x && Math.floor(mousePos.y) < allTheBeetles[i].y + (allTheBeetles[i].height - 7) && Math.floor(mousePos.y) > allTheBeetles[i].y) {
        allTheBeetles[i].squish()
        setTimeout(() => {
          allTheBeetles.splice(i, 1)
        }, 500);
        hitNum++
        document.getElementById('hit').innerHTML = hitNum
      }
    }
  }, false);

  //Gets Mouse Position
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
      this.image = './image/sunflower.png'
      this.counter = -1;
      this.ind = 0;
    }
    drawFlower() {
      this.counter++;
      if (this.counter % 50 === 0) {
        this.y -= 10;
        if (this.y == 5) {
          $('.win').css('display', 'inline');
          setTimeout(() => {
            location.reload()
          }, 3000)
        }
      }
      let theImage = new Image();
      theImage.src = this.image;
      ctx.drawImage(theImage, 200, this.y, 300, 800);
    }
  }
  let flower = new Sunflower(200, 525, 300, 800);
};