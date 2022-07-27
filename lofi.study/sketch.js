let play=false;
let amplitude;
let deg=0

function preload(){
  mySound= loadSound("assets/lofi.mp3")
}

function setup() {
  
  let cnv=createCanvas(windowWidth, windowHeight);
  cnv.parent("canvasContainer")
  amplitude=new p5.Amplitude()
}

function draw() {
  //background(0,20);
  push()
  fill(0,20)
  noStroke()
  rect(0,0,250,250)
  pop()
  stroke(255)
  strokeWeight(1)
  let level= amplitude.getLevel()
  let dia = map(level, 0.0,1.0,0,255)
  translate(100,100)
  push()
  for(r=0;r<10;r+=1){
    
   rotate(0.5*radians(deg)*r)
  ring(0,0,(10*r+0.1*dia),5,30)
   
  }
  pop()
  push()
  for(r=0;r<15;r+=2){
    
    rotate(0.5*radians(deg)*r)
   ring(0,0,10*(r+0.1*dia),4,20)
    
   }
   pop()
  deg=deg+level/2
}

function mousePressed(){
  if(mouseX<200&&mouseY<200){
  console.log(play)
  play=!play
  if(play==true){
    mySound.play()
  }else{mySound.pause()}
}
}
function ring(x,y,r,n,rl){
  
  //x,y=center
  //r=circle r
  //n=number of arcs
  //rl=degree of arcs
  
  noFill()
  let rg=(360-n*rl)/n
  for(let i=0; i<n;i+=1){
  arc(x,y,r,r,0+i*(radians(rl+rg)),i*(radians(rl+rg))+radians(rl))
  } 
  
}