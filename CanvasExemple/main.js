
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number
function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}
Ball.prototype.draw = function() { 
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}
Ball.prototype.update = function() {
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
}

// structura de date in care vom stoca bilele

var balls = [];

function loop() {
  // cream un background negru
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);   
    
  //cream 25 de instante pe functia Constructor Ball   
  while (balls.length < 25) {
    var ball = new Ball(
      random(0, width),
      random(0, height),
      random(-7,7),
      random(-7,7),
      'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
      random(10,20)
      );
    balls.push(ball);     
  }
  Ball.prototype.collisionDetect = function() {
    for (var j = 0; j < balls.length; j++) {
      
      // pentru orice alt obiect decat obiectul curent
      if (!(this === balls[j])) {
        // formula pentru detectarea coliziunilor
        var dx = this.x - balls[j].x;
        var dy = this.y - balls[j].y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        
        // daca exista o coliziune cu obiectul curent, le schimbam culorile ambelor obiecte
        if (distance < this.size + balls[j].size) {
        
        balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        }
      }
    }
  }
    
  // pentru fiecare bila: o desenam si imediat o miscam
   
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    balls[i].collisionDetect();
  }

  // repetam procesul prin auto-invocare
  requestAnimationFrame(loop);
}
window.loop();