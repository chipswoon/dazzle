/*global createCanvas, windowWidth, windowHeight, WEBGL, mouseIsPressed, fill, mouseX, mouseY, ellipse, clear, noStroke, x, y, colorMode, HSB, width, height, color, drawingContext, sphere, translate, push, normalMaterial, specularMaterial, pop, pointLight, ambientLight, ambientMaterial, shininess*/

  
  let x = 0;
  let y = 0;
  
  var canvas;
  let glitch;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  //colorMode(HSB, 360, 100, 100, 100);
  glitch = loadImage('https://cdn.glitch.global/7e198df3-edba-423a-af46-77b1b5c312e7/DALL%C2%B7E%202023-08-19%2018.23.26%20-%20glitch%20style%20illustration%20in%20pink%2C%20green%20and%20black%20colours.png?v=1692440669705');
  checker = loadImage('https://cdn.glitch.global/7e198df3-edba-423a-af46-77b1b5c312e7/check.jpeg?v=1692416852663');
  
  noStroke();

}

function draw() {
  clear();
  
  x += (mouseX - width/2 - x + 50) * 0.04;
  y += (mouseY - height/2 - y + 50) * 0.04;
  
  translate(x, y, 5);
  push();
    texture(glitch);
    rotateY(180);
    sphere();
  pop();
  
  push();
    texture(checker);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(70, 50, 95);
  pop();
  
  
}

