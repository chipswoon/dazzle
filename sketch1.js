/* global createCanvas windowWidth windowHeight mouseX mouseY width height*/

let x = 0;
let y = 0;

var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
}

function draw() {
  noStroke();
  clear();
  fill(255, 65, 255, 10)
  
  x += (mouseX - x + 50) * 0.04;
  y += (mouseY - y + 50) * 0.04;
  
  push();
    for (let i = 0; i < 25; i++) {
    
    noStroke();
    
    let colour = i+200; //(10*i % 500);
    let shade = 200 - i;
    let opacity = 1 + i;
    fill(colour, 100, shade, opacity);
    
    let diameter = (height*.5) * Math.pow(0.85, i);
    
    circle(x, y, diameter); 
  } 
  pop();
}