float x = 0;
float y = 20;
float xspeed = 1;
float yspeed = 2;
float r = 20;
float friction = 0.1;

int pageSize = 400;
int fillColour = 200;
int strokeWeight = 0;

int bgr = 255;
int bgg = 255;
int bgb = 255;

void setup() {
  size(pageSize,pageSize);
  background(bgr,bgg,bgb);
  smooth();
}

void draw() {

  x = x + xspeed;
  y = y + yspeed;

  if ((x > width) || (x < 0)) {
    xspeed = -xspeed;
  }
  if ((y > height) || (y < 0)) {
    yspeed = -yspeed;
  } else {
    yspeed += 1;
  }
  
  //yspeed += friction;
  
  for (int i = 200; i > 0; i-=10) {
  strokeWeight(strokeWeight);
  fill(y,x,fillColour);
  ellipse(x,y,i,i);
  }
  
  if (keyPressed) {
    if (key == 'c' || key == 'C') {
      x = 0;
      y = 0;
    }
    if (key == '-' || key == '-') {
      r -= 1;
    }
    if (key == '=' || key == '+') {
      r += 1;
    }
    if (key == ',' || key == '<') {
      fillColour -= 5;
    }
    if (key == '.' || key == '>') {
      fillColour += 5;
    } 
    if (key == 'g' || key == 'G') {
      bgr =0;
      bgg =255;
      bgb =0;
    } 
    if (key == 'r' || key == 'R') {
      bgr =255;
      bgg =0;
      bgb =0;
    } 
    if (key == 'b' || key == 'B') {
      bgr =0;
      bgg =0;
      bgb =255;
    } 
    if (key == 'w' || key == 'W') {
      bgr =255;
      bgg =255;
      bgb =255;
    } 
  }
}

