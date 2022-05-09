let x
let y
let block=[]

let cx=0
let cy=0

function preload(){
 ra=loadImage("assets/Ra.gif")
 rd=loadImage("assets/Rd.gif")
 still=loadImage("assets/still.png")
 bg=loadImage("assets/background.png")
}


function setup() {
  x=120
  y=150
  let cnv=createCanvas(800, 600);
  cnv.parent("canvasContainer")
  fill(255,10)
  p=new character(x,y)
    base=new platform2(0,1000,2400+windowWidth,20)

    block.push(new platform(20,250,210,30))
    block.push(new platform(235,370,290,30))
    block.push(new platform(493,530,160,30))

    block.push(new platform(675,485,25,30))
    block.push(new platform(670,355,25,30))
    block.push(new platform(748,300,27,30))
    block.push(new platform(748,430,27,30))

    
    block.push(new platform(875,380,245,30))
    block.push(new platform(1062,480,160,30))


    block.push(new platform(1120,630,235,30))
    block.push(new platform(1430,725,200,30))
    block.push(new platform(1430,580,130,30))
    block.push(new platform(1540,655,165,30))

    block.push(new platform(1650,545,115,30))
    block.push(new platform(1867,850,260,30))

    block.push(new platform2(2190,760,110,30))
    block.push(new platform(2265,640,120,30))
    block.push(new platform2(2120,490,250,30))
    block.push(new platform2(2245,345,105,30))
    block.push(new platform(1735,160,665,30))

    block.push(new platform2(647,655,270,30))
    
    P2=new platform2(647,855,270,30)
    
    P1=new platform(20,250,210,30)
  
}

function draw() {
  background(57);
  
  // text("I haven't finished the graphics yet, but you can already jump on different platforms!",100,100)
  if(p.x>=300){
    cx=-p.x+300
  }
  if(p.x<100){
    cx=100-p.x
  }
  if(p.y+p.h>=400){
    cy=-(p.y+p.h)+400
  }
  if(p.y+p.h<100){
    cy=100-(p.y+p.h)
  }
  translate(cx,cy)
  image(bg,0,0)
 
  //console.log(P.onPlatform)

    base.display()
    base.update()
//  P1.display()
for(i=0;i<block.length;i++){
  //block[i].display()
  block[i].update()
}
  P2.display()
  P2.update()
 P1.update()
   p.display()
  p.update()
  
}
class platform{
  constructor(x,y,w,h){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    
    this.onPlatform=false
  }
  display(){
    rect(this.x,this.y,this.w,this.h)
  }
  update(){
   //  
    if(p.v1<p.g*p.t||p.h>0){
      p.fall=true
      p.falling=false
      
    }else{
      p.falling=true
         }
   
 
    //function "platform"
    if(p.x>this.x&&p.x<this.x+this.w&&p.y+p.h<=this.y&&p.y+p.h>this.y-this.h){
      this.onPlatform=true
      p.onPlatform=true
   }
    if(p.x<this.x||p.x>this.x+this.w||p.y+p.h>this.y||p.y+p.h<this.y-this.h){
      this.onPlatform=false
      p.inPlatform=false
    }
if(this.onPlatform==true&&p.fall==true){
      p.y=this.y
      p.h=0
      p.t=0    
      p.jump=false
      p.v1=30 
    }
  }
}
class platform2{
  constructor(x,y,w,h){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    
    
    this.onPlatform=false
  }
  display(){
    rect(this.x,this.y,this.w,this.h)
  }
  update(){
   //  
    if(p.v1<p.g*p.t||p.h>0){
      p.fall=true
      p.falling=false
      
    }else{
      p.falling=true
         }
  
    //function "platform"
    if(p.x>this.x&&p.x<this.x+this.w&&p.y+p.h<=this.y&&p.y+p.h>this.y-this.h){
      this.onPlatform=true
   }
    if(p.x<this.x||p.x>this.x+this.w||p.y+p.h>this.y||p.y+p.h<this.y-this.h){
      this.onPlatform=false
    }
if(this.onPlatform==true&&p.fall==true){
      p.y=this.y
      p.h=0
      p.t=0    
      //p.jump=false
      p.v1=50 
    }
  }
}
class platform3{
  constructor(x,y,w,h){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    
    this.onPlatform=false
  }
  display(){
    rect(this.x,this.y,this.w,this.h)
  }
  update(){
   //  
    if(p.v1<p.g*p.t||p.h>0){
      p.fall=true
      p.falling=false
      
    }else{
      p.falling=true
         }
   
 
    //function "platform"
    if(p.x>this.x&&p.x<this.x+this.w&&p.y+p.h<=this.y&&p.y+p.h>this.y-this.h){
      this.onPlatform=true
      p.onPlatform=true
   }
    if(p.x<this.x||p.x>this.x+this.w||p.y+p.h>this.y||p.y+p.h<this.y-this.h){
      this.onPlatform=false
      p.inPlatform=false
    }
if(this.onPlatform==true){
      p.y=this.y
      p.h=0
      p.t=0    
      p.jump=false
     
      p.v1=30 
    }
  }
}
class character{
  constructor(startX,startY){
    this.x=startX
    this.y=startY
    
    this.g=4
    this.v1=30
    this.v2=3
    this.t=0
    this.dt=0.2
    this.h=0
    
    this.jump=false
    this.fall=true
    this.falling=false
    
    this.D=false
    this.A=false


    constrain(this.h,-100,0)
  }
  display(){
    //circle(this.x,this.y+this.h,10)
    if(this.D==false&&this.A==false){image(still,this.x-15,this.y+this.h-40)}
   
  }
  update(){
    if(this.fall==true&&this.jump==false){
      this.h=0.5*this.g*this.t*this.t
       this.t=this.t+this.dt
    }
    if(keyIsDown(87)&&this.falling==true){
      this.jump=true
    }
    
    if(this.jump==true){
      this.fall=false
    }
    if(this.fall==true){
      this.jump=false
    }
    if(this.jump==true&&this.fall==false){
      this.h=-(this.v1*this.t-0.5*this.g*this.t*this.t)
      this.t=this.t+this.dt
    }
    
    
    if(keyIsDown(65)){
      this.x=this.x-this.v2
      this.A=true
      image(ra,this.x-15,this.y+this.h-40)
      ra.play()
    }else{this.A=false}
    if(keyIsDown(68)){
      this.x=this.x+this.v2
      this.D=true
      image(rd,this.x-15,this.y+this.h-40)
      rd.play()
    }else{this.D=false}
  }
}
