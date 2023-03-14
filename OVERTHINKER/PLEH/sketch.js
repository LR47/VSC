let x

let mode=true

let scene=1

let startX=100
let startY=245

function preload(){

  cwalkr=loadImage("assets/Assets/gifs/Walkingr.gif")
  cwalkl=loadImage("assets/Assets/gifs/Walking.gif")
  cstill=loadImage("assets/Assets/C.A.Still.gif")
  
  //scene1

  bed1=loadImage("assets/Bed.png")
  bed2=loadImage("assets/Bed2.png")

  photo1=loadImage("assets/Assets/Pngs3.png")
  photo2=loadImage("assets/Assets/gifs/O.B.Wall.gif")

  table1=loadImage("assets/table1.png")
  
  wall1=loadImage("assets/PLEH.png")
  wall2=loadImage("assets/table2.png")
  table12=loadImage("assets/catclock.png")

  cat=loadImage("assets/catclock.png")
  

  door1=loadImage("assets/Door1.png") 

  //scene2
  mirror1=loadImage("assets/mirror1.png")
  mirror2=loadImage("assets/mirror2.png")

  cot1=loadImage("assets/cot1.png")
  cot2=loadImage("assets/cot2.png")
 
  fishtank=loadImage("assets/fishtank.png")
  cage=loadImage("assets/Assets/O.B.Cage.png")

  window1=loadImage("assets/window1.png")
  window2=loadImage ("assets/window2.png")
}

function setup() {
  let cnv=createCanvas(600, 400);
  cnv.parent("canvasContainer")

  c=new character(startX,startY)
  
  bed=new graphic(100,220,150,60)
  drawing=new graphic(225,150,60,60 )
  table=new graphic(350,175,150,150)
  door=new graphic(500,200,60,100)
  door=new object(500,200,60,100)
  door2=new graphic(100,200,60,100)
  door2=new object(100,200,60,100)
  out=new graphic(450,200,100,100)
  table2=new graphic(300,200,100,100)
  
  mirror=new graphic(200,160,30,70)


}

function draw() {
  if(mode==true){
  background(220)
  }
  if(mode==false){
    background(100)
  }
  
  push()
  fill(0)
  rect(0,250,width,200)
  fill(255)
  rect(100,275,width-200,100)
  pop()
  //scene1
  if(scene==1){
  //bed.display()
  bed.status()
  bed.description("I need to set alarms before going to bed.","You always need one more alarm. If not, at least 3","Bed","Bed?")

  table.description("Just a clock,it set to 3","a cat clock, it is set to 9","Clock","Cat Clock")
  
  //drawing.display()
  drawing.status()
  drawing.description("Family photos taken in traveling times.","They are watching me, do they know I never liked traveling?","Photos","Photos?")
  table.status()
  //table.display()
  //door.display()

  if(mode==true){
    //background(220)
    //bed=new graphic(100,220,150,60)
    push()
    rectMode(CENTER)
    image(bed1,20,120,150,150)
    image(photo1,150,100,150,150)
    image(table1,275,115,150,150)
    image(door1,470,150,60,100)
    pop()
    }

    if(mode==false){
      //background(220)
      push()
    rectMode(CENTER)

    image(wall1,70,50,50,50)
    image(wall2,60,100,100,100)

    image(bed2,20,120,150,150)
    image(photo2,160,100,120,150)
    image(table12,275,115,150,150)
    image(door1,470,150,60,100)
    
    pop()
    
      }
  

}
 if(scene==2){
   door2.display()
   
   //table2.display()
   table2.status()
  table2.description("Fish tank. I want a bird","A bird clock is in there.It is set to 2.","Fish tank","Cage.")
   
   //out.display()
   out.status()
  out.description("There is nothing outside.","A big tree, I wonder if it'll catch me when I jump","Window","Window?")
   
   //mirror
   rect(200,160,30,70)
 
    if (c.x>200&&c.x<230&&mouseX>200&&mouseX<230){
     // fill(0)
    if(mode==true){
      text("It scares me when I look at myself",125,300)
    }
      if(mode==false){
      text("welcome to your mental world",125,300)
    }
  }
  if(mode==true){
    //background(220)
    //bed=new graphic(100,220,150,60)
    push()
    rectMode(CENTER)
    
    image(door1,70,150,60,100)
    image(mirror1,160,135,100,120)
    image(cot1,250,165,100,100)
    image(window1,400,150,100,100)
    image(fishtank,245,128,100,100)

    pop()
    }

    if(mode==false){
      //background(220)
      push()
    rectMode(CENTER)
    
    image(door1,70,150,60,100)
    image(mirror2,160,135,100,120)
    image(cot2,250,165,100,100)
    image(window2,400,150,100,100)
    image(cage,265,120,80,100)
    pop()
    
      }
   
 } 
  
 c.display()
  if(mouseIsPressed && mouseY<250){
    x=mouseX
  }
  c.update(x)
  push()
  //image(cstill,c.x,c.y,100,125)
  pop()
  c.interact()
  c.response() 

  image(cstill,10,250,160,200)

}
function mousePressed(){
  // door=new object(500,200,60,100)
  // door2=new graphic(100,200,60,100)
  if (scene==2&&c.x>200&&c.x<230&&mouseX>200&&mouseX<230){
    mode=!mode
  }
  if (scene==1&&c.x>470&&c.x<530&&mouseX>470&&mouseX<530){
    scene=2
    c.x=100  
  }
  if (scene==2&&c.x>70&&c.x<130&&mouseX>70&&mouseX<130){
    scene=1
    c.x=500  
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
    this.x=this.x+1.5*(x-this.x)/abs(x-this.x)
    
    if(x>this.x){
    image(cwalkr,this.x-40,this.y-90,80,100)}
    if(x<this.x){
      image(cwalkl,this.x-40,this.y-90,80,100)}
  }else{
    image(cstill,this.x-40,this.y-90,80,100)
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
  constructor(startX,startY,width,height){
    this.x=startX
    this.y=startY
    this.intr=false
    this.picked=false
    this.move=false
    this.w=width
    this.h=height
    
    
    this.crossworld=false

  }
  display(){
    push()
    rectMode(CENTER)
    rect(this.x,this.y,this.w,this.h)
    pop()
     
  }
  checkdis(x,y){
    if(dist(x,y,this.x,this.y)>this.w/2){
      this.intr=false
    }else{this.intr=true}
  }
  
  
}

class graphic{
  constructor(x,y,w,h){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    
    this.hover=false
    this.target=false   
  }
  
  display(){
    push()
    rectMode(CENTER)
    rect(this.x,this.y,this.w,this.h)
    
    pop()
  }
  status(){
    if(mouseX>this.x-this.w/2&&mouseX<this.x+this.w/2&&mouseY>this.y-this.h/2&&mouseY<this.y+this.h/2){
      this.hover=true
    }else{this.hover=false}
    
    if(this.hover==true&&mouseIsPressed){
      this.target=true
    }
    if(this.hover==false&&mouseIsPressed){
      this.target=false
    }
  }
  
  description(t1,t2,t3,t4){
    
    if(mode==true){
      
      if(this.hover==true){
        text(t3,100,100)
      }
      if(this.target==true){
        text(t1,125,300)
      }
      
    }
    
    if(mode==false){
      
      if(this.hover==true){
        text(t4,100,100)
      }
      if(this.target==true){
        text(t2,125,300)
      }
      
    }
    
  }
  
}
