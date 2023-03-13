let x

let startX=100
let startY=245

let scene=0
let doorLocked=true
let doordes=true

let mode=true

function preload(){
  //characterimage=loadImage("assets/C.A.Still.gif")
  Doorimg=loadImage("assets/Door.png")
  Keyimg=loadImage("assets/key.png")
  mirror1=loadImage("assets/mirror1.png")
  mirror2=loadImage("assets/mirror2.png")
  help1=loadImage("assets/pngs5.png")
  help2=loadImage("assets/pngs6.png")

  trueleft=loadImage("assets/left-1.png")
  left=loadImage("assets/left.png")
  trueright=loadImage("assets/right-1.png")
  right=loadImage("assets/right.png")
}


function setup() {
  let cnv=createCanvas(600, 400);
  cnv.parent("canvasContainer")

  createCanvas(600, 400);
  c=new character(startX,startY)
  k=new object(200,245)
  
  
  w1=new object(200,200)
  w2=new object(200,210)
}

function draw() {
  if(mode==true){
  background(220)
  }
  if(mode==false){
    background(100)
  }
  text(scene,10,10)
  //text
  fill(0)
  rect(0,250,width,200)
  fill(255)
  rect(100,275,width-200,100)
  //text
  //console.log(mode)
  //scene0
  if (scene==0){
    
  text('click to move',300,200)
  push()
  rectMode(CENTER)
  fill(0)
  rect(450,225,30,50)
  image(Doorimg,435,200,30,50)
  pop()
  }
  //scene1
  if (scene==1){
  text('rightclick to interact',300,150)
  push()
  rectMode(CENTER)
  fill(0)
  rect(100,225,30,50)
  image(Doorimg,85,200,30,50)
    rect(450,225,30,50)
    image(Doorimg,435,200,30,50)
  pop()
    
    //key
    
    k.display()
    k.description("right click to pick up objects","key")
    k.checkdis(c.x,c.y)
    k.status()
    k.drag(100,260)
    image(Keyimg,k.x-5,k.y-5)
    //door
    if (doordes==true&&mouseX>435&&mouseX<465){
      text('locked,use the key, right click to interact',200,200)
    }
    
  }
  //scene2
  if (scene==2){
    
    text('interaction with some stuff allows you to jump in and out of your mental world',100,150)
    
    text('replace "answer" in the browser link with the information you have to jump to the next page',50,170)
    
  push()
  rectMode(CENTER)
  fill(0)
  //rect(450,225,30,50)
    rect(100,225,30,50)
    image(Doorimg,85,200,30,50)
    if(mode==true){
      fill(255)
      image(mirror1,285,200,30,50)
    }
  if(mode==false){
      fill(0)
      image(mirror2,285,200,30,50)
    } 
    //rect(300,225,30,50)
  pop()
    if (c.x>285&&c.x<315&&mouseX>285&&mouseX<315&&mouseY>200&&mouseY<250){
      fill(0)
    if(mode==true){
      text("It scares me when I look at myself",125,300)
    }
      if(mode==false){
      text("welcome to your mental world",125,300)
    }
  }
    if (mouseX>285&&mouseX<315&&mouseY>200&&mouseY<250){
      text('mirror',100,100)
    }
    //console.log(w2.intr)
    
    if(mode==true){
      w1.display()
      w1.description("Somthing is missing",'?')
      image(help1,w1.x-35,w1.y-25,100,100)
      if(w2.picked==true){
        w2.display()
      
    w2.checkdis(c.x,w2.y)
    w2.status()
    w2.drag(100,260)
    image(help2,w2.x-35,w2.y-35,100,100)
      }
      if(w2.crossworld==true){
        w2.display()
        w2.x=200
        w2.y=210
        image(help2,w2.x-35,w2.y-35,100,100)
      }
    }
    if(mode==false&&w2.crossworld==false){
      w2.display()
      w2.description("Some signs, bring it to the other world and we'll see","?")
    w2.checkdis(c.x,w2.y)
    w2.status()
    w2.drag(100,260)
    image(help2,w2.x-35,w2.y-35,100,100)
    }
    
  }
  
  c.display()
  if(mouseIsPressed && mouseY<250){
    x=mouseX
  }
  c.update(x)
  c.interact()
  c.response()
  if(mode==true){
    if(x==undefined){
      image(trueright,c.x-15,c.y-40,30,50)
    }
    if(x>=c.x){
    image(trueright,c.x-15,c.y-40,30,50)
    }
    if(x<c.x){
      image(trueleft,c.x-15,c.y-40,30,50)
    }
  }
  if(mode==false){
    if(x==undefined){
      image(right,c.x-15,c.y-40,30,50)
    }
    if(x>=c.x){
    image(right,c.x-15,c.y-40,30,50)
    }
    if(x<c.x){
      image(left,c.x-15,c.y-40,30,50)
    }
  }
}
function mousePressed(){
  if(k.picked==true && mouseButton===RIGHT){
    if(dist(450,225,k.x,k.y)<15){
      doorLocked=false
    }
  }
  
  if(w2.picked==true && mouseButton===RIGHT){
    if(dist(200,205,w2.x,w2.y)<5){
      w2.picked=false 
      w2.crossworld=true
      w2.x=300
      w2.y=300
    }
  }
  
  
  //pages transition
  
  //normal
  
  if (scene==0&&c.x>435&&c.x<465&&mouseX>435&&mouseX<465){
    c.x=startX
    scene++
  }
  if (scene>=1&&c.x>85&&c.x<115&&mouseX>85&&mouseX<115){
    c.x=450
    scene=scene-1
  }
  
  //locked doors
  
  if (scene==1&&c.x>435&&c.x<465&&mouseX>435&&mouseX<465){
    if(doorLocked==true){
      doordes=true
    }
    if(doorLocked==false){
      doordes=false
    c.x=startX
    scene=scene+1
    }
  }
  
  //objects
  
  //key
  
  if (dist(mouseX,mouseY,k.x,k.y)<5){
    k.checkmove()
    k.checkpick()
  }
  
  //w2
  if (dist(mouseX,w2.y,w2.x,w2.y)<5){
    w2.checkmove()
    w2.checkpick()
    
  }
  
  
  //mirror
  
  if (scene==2&&c.x>285&&c.x<315&&mouseX>285&&mouseX<315){
    mode=!mode
  }
  
  
}
class character{
  constructor(startX,startY){
    this.x=startX
    this.y=startY
    this.intr=false
    
  }
  display(){
    push()
    rectMode(CENTER)
    //circle(this.x,this.y,10)
    pop()
  }
  update(x){
    if(abs(x-this.x)>5){
    this.x=this.x+(x-this.x)/abs(x-this.x)
  }
  }
  interact(){
     if(keyIsPressed&&key=="e"){
      this.intr=true
    }else{this.intr=false}
  }
  response(){
    if(this.intr==true){
      text("interacting",100,100)
    }
  }
}
class object{
  constructor(startX,startY){
    this.x=startX
    this.y=startY
    this.intr=false
    this.picked=false
    this.move=false
    
    this.crossworld=false

  }
  display(){
    push()
    fill(100)
    rectMode(CENTER)
    rect(this.x,this.y,10,10)
    pop()
    
    if(this.picked==true){
      push()
    this.x=300
      this.y=300
      pop()
    }
  }
  checkdis(x,y){
    if(dist(x,y,this.x,this.y)>5){
      this.intr=false
    }else{this.intr=true}
  }
  checkmove(){
    if(dist(mouseX,this.y,this.x,this.y)<5 && this.picked==true){
      this.move=!this.move}
  }
  description(t1,t2){
    if(this.intr==true){
     // t1(textbox)
      push()
      fill(0)
    text(t1,125,300)
    pop()
    }
    if(dist(mouseX,this.y,this.x,this.y)<5&&this.picked==false){
      push()
      stroke(0)
      text(t2,100,100)
      pop()
      //cursor('grab')
    }else{}
  }
  checkpick(){
    if(dist(mouseX,this.y,this.x,this.y)<5 && this.picked==false){
      this.intr=true}
  }
  status(){
    if(this.intr==true&&mouseButton === RIGHT){
    this.picked=true}
  }
  drag(x,y){
    if(this.picked==true&&this.move==true){
      this.x=mouseX
      this.y=mouseY
    }
    if(this.picked==true&&this.move==false){
      this.x=x
      this.y=y
    }
  }
  
}