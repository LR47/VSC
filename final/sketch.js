let pagenum=0
let pages=[0,1,2,3,4,5,6,7]
let thoughts=[]

let textbox1=['We are the response.','Relax...','I should eat something.','Be in the conversation.','You are becoming a burden.','Life is better without you.','Leave me alone.']
let textbox1r=['We are buttons.','Get up!!','MORE weight?','They think you are awkward.','I am protecting you.','You really think so?','...ok.']

let textbox2=['Click us to proceed.','Today is going to be great!','I am full.','Eye contact.','I hate your thoughts.' ,'And I hate you.','Go away.']
let textbox2r=['Click us to proceed.','If you behave well.','Like you have enough energy.','Do not.You look silly.','But I am you.','Really?','...ok.']



function preload(){
  img11=loadImage("assets/Scene1.1.png")
  img12=loadImage("assets/Scene1.2.png")
  img21=loadImage("assets/Scene2.1.png")
  img22=loadImage("assets/Scene2.2.png")
  img31=loadImage("assets/Scene3.1.png")
  img32=loadImage("assets/Scene3.2.png")
  img41=loadImage("assets/Scene4.1.png")
  img42=loadImage("assets/Scene4.2.png")
  img=loadImage("assets/thoughts.png")
  

  bubbleSound=loadSound("assets/Bubble.mp3")
  pageSound=loadSound("assets/Pages.mp3")
}


function setup() {
  let cnv=createCanvas(800, 600);
  cnv.parent("canvasContainer")
  
}

function draw() {
  textFont('Nanum Pen Script')
  background(255);
  //constrain(thoughts.length,1,30)
  if(pagenum==1){
    image(img11,0,0)
    image(img12,400,0)
  }
  if(pagenum==2){
    image(img21,0,0)
    image(img22,400,0)
  }
  if(pagenum==3){
    image(img31,0,0)
    image(img32,400,0)
  }
  if(pagenum>3&&pagenum<7){
    image(img41,0,0)
    image(img42,400,0)
  }
  if(pagenum>=7){
    image(img41,0,0)
    textSize(40)
    text('"find yourself"',500,200)
  }
  if(pagenum<4){
    if (random(1.00) < 0.01+pagenum*0.01){
      thoughts.push(new bubble(random(400,750),random(50,400)))
    }}
    
    
  for(let i=0; i<thoughts.length; i++){
    let t=thoughts[i]
    t.display()
    t.update()
    t.check()
  }
  for(let i=0; i<thoughts.length; i++){
    let t=thoughts[i]
    if(t.erase==true){
      thoughts.splice(i,1)
      bubbleSound.play()
    }
  }
  strokeWeight(5)
  console.log(windowWidth)
  
  line(0,400,800,400)
  line(400,0,400,400)
   
  //
  push()
  strokeWeight(3)
  if(mouseX>200&&mouseX<600&&mouseY>450&&mouseY<500){
    fill(0)
    rect(200,450,400,50)
    fill(255)
      textSize(20)
    if(pagenum<7){
    text(textbox1r[pagenum],300,480)
    }
  }else{
    fill(255)
    rect(200,450,400,50)
    fill(0)
   
      textSize(20)
    if(pagenum<7){
    text(textbox1[pagenum],300,480)
    }
        }
  pop()
  //
  push()
  strokeWeight(3)
  if(mouseX>200&&mouseX<600&&mouseY>530&&mouseY<580){
    fill(0)
    rect(200,530,400,50)
    fill(255)
    textSize(20)
    if(pagenum<7){
    text(textbox2r[pagenum],300,560)
    }
  }else{
    fill(255)
    rect(200,530,400,50)
    fill(0)
      textSize(20)
    if(pagenum<7){
    text(textbox2[pagenum],300,560)
    }
        }
  
  pop()
 push()
 textSize(30)
 fill(100)
 text("Remember to clear your thoughts, or you will be stuck in reality.",70,430)
 pop()
 

}

function mousePressed(){
  
  if(pagenum<pages.length&&(mouseX>200&&mouseX<600&&mouseY>450&&mouseY<500||mouseX>200&&mouseX<600&&mouseY>530&&mouseY<580)){
    if(thoughts.length<20){
      pagenum=pagenum+1
      pageSound.play()
    }
    }
 }

 class bubble {
  constructor(startX,startY){
    this.x=startX
    this.y=startY
    
    this.t=0
    this.erase=false
  }
  display(){
    fill(0)
    image(img,this.x,this.y)
    //rect(this.x,this.y,60,30)
  }
  update(){
    this.t=this.t+1
    if(this.t>360){
      this.t=0
    }
    this.y=this.y+0.1*cos(radians(this.t))
  }
  check(){
    if(mouseIsPressed&&mouseX>this.x&&mouseX<this.x+60&&mouseY>this.y&&mouseY<this.y+30){
      this.erase=true
    }
  }
}