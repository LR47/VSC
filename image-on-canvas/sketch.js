let img
function preload(){
  img=loadImage("assets/png.png")
}

function setup() {
  let cnv=createCanvas(400, 400);
  cnv.parent("canvasContainer")
}

function draw() {
  background(220);
  scale(0.1)
  image(img,50,50)
}