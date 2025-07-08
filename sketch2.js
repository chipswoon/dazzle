/* global createCanvas windowWidth windowHeight mouseX mouseY width height*/

let x = 0;
let y = 0;

let capture;

var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.position(0,0);
  capture = createCapture(VIDEO);
  capture.size(100,100);
  capture.hide();

}

function draw() {
  clear();
  noStroke();
  
  x += (mouseX - width/2 - x) * 0.04;
  y += (mouseY - height/2 - y) * 0.04;
  
  translate(x, y, 5);
  rotateY(180);
  ambientLight(246,0,100);

  //push();

    texture(capture);
    sphere();
  //pop();
}