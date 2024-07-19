 function setup () {
   createCanvas(700, 480);
   background(255, 204, 0);
   strokeWeight(10);
   stroke("purple")
   frameRate(10);
 }

function draw() {
let posY = mouseX;
let posX = mouseY;
point(posX, posY);
}