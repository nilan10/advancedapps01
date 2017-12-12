// names variables
var bird;
var pipes = [];
//it sets up the bacic rules of the code
function setup() {
  createCanvas(400, 600);
  // says to make a new Bird Function every time bird is present
  bird = new Bird();
 
  pipes.push(new Pipe());
}
//this iswhat wil be drawn on the screen
function draw() {
  background(0);
//this contols the game score at the top
  fill(255,255,255)
  textSize(32) 
 text(frameCount,70,30,70);
  
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      console.log("HIT");
    }


    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
	
}
function mousePressed() {
    bird.up();
    //console.log("SPACE");
  }
 

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

  this.show = function() {
    fill(255,255,0);
    ellipse(this.x, this.y, 65, 32);
    fill(255)
    ellipse (this.x,this.y-10,10,10)
    line(this.x+15,this.y, this.x+40, this.y)
    fill(0)
    ellipse(this.x, this.y-10,5,5)
    fill(255,100,0)
    triangle(this.x+15,this.y-15,this.x+15,this.y+15, this.x+40, this.y) 
      fill(0,255,0)
     
  triangle(this.x+10,this.y,this.x-25, this.y,this.x-25,this.y+20)
    
   
  }
  {this.x+10,this.y,this.x-25, this.y,this.x-25,this.y+20}
  this.up = function() {
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}

function Pipe() {
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 2;

  this.highlight = false;

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
  }

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255, 0, 0);
      textSize(32);
      text("Game Over", 200, 200);
    
      
    
      
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }


}