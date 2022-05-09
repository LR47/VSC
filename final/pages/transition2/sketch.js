let play=false;
let amplitude;
let deg=0

function preload(){
  mySound= loadSound("assets/spira.mp3")
}

function setup() {
  
  let cnv=createCanvas(windowWidth, 400);
  cnv.parent("canvasContainer")
  amplitude=new p5.Amplitude()
}

function draw() {
  background(0,10);
  stroke(255)
  strokeWeight(2)
  let level= amplitude.getLevel()
  let dia = map(level, 0.0,1.0,0,255)
  translate(windowWidth/2,200)
  scale(0.5)
  push()
  for(r=0;r<10;r+=1){
    
   rotate(radians(deg)*r)
  ring(0,0,(10*r+dia*2),5,30)
   
  }
  pop()
  if(level>0.5){
    push()
  for(r=0;r<10;r+=2){
    
   rotate(radians(deg)*r)
  ring(random(windowWidth),random(200),(10*r+dia),5,30)
   
  }
  }
  push()
  for(r=0;r<15;r+=3){
    
    rotate(radians(deg)*r)
   ring(0,0,5*(r+dia),6,10)
    
   }
   pop()
  deg=deg+level/2
}

function mousePressed(){
  if(dist(mouseX,mouseY,windowWidth/2,200)<30){
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