let x
let y
let base=[]

function preload(){
 ra=loadImage("assets/Ra.gif")
 rd=loadImage("assets/Rd.gif")
 still=loadImage("assets/still.png")
}


function setup() {
  x=220
  y=0
  let cnv=createCanvas(800, 600);
  cnv.parent("canvasContainer")
  p=new character(x,y)
  P=new platform(0,150,50,20)
  P2=new platform3(200,200,50,20)
  P3=new platform(300,250,50,20)
   P4=new platform(400,300,50,20)
   P5=new platform(350,170,50,20)
  for(i=0;i<width/50;i++){
    base.push(new platform2(0+50*i-10,380,50,20))
  }
}

function draw() {
  background(220);
  text("I haven't finished the graphics yet, but you can already jump on different platforms!",100,100)
  if(p.x>=300){
    translate(-p.x+300,0)
  }
  if(p.x<100){
    translate(100-p.x,0)
  }
  P.display()
  P.update()
  //console.log(P.onPlatform)
  
  P2.display()
  P2.update()
   P3.display()
  P3.update()
  P4.display()
  P4.update()
   P5.display()
  P5.update()
  for(i=0;i<width/50;i++){
    base[i].display()
    base[i].update()
  }
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
      p.v1=40 
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
    
    this.g=5
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
