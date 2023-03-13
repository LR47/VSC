let pieces=[]
let pieces2=[]
let pieces3=[]

let p1img=[]
let p2img=[]
let p3img=[]

let phase2=false
let phase3=false


function preload(){
  imgp11=loadImage("assets/jigsaw1.png")
  imgp12=loadImage("assets/jigsaw2.png")
  imgp13=loadImage("assets/jigsaw3.png")
  imgp14=loadImage("assets/jigsaw4.png")
  imgp15=loadImage("assets/jigsaw5.png")
  imgp16=loadImage("assets/jigsaw6.png")
  imgp17=loadImage("assets/jigsaw7.png")
  imgp18=loadImage("assets/jigsaw8.png")
  imgp19=loadImage("assets/jigsaw9.png")

  img21=loadImage("assets/jigsaw21.png")
  img22=loadImage("assets/jigsaw22.png")
  img23=loadImage("assets/jigsaw23.png")
  img24=loadImage("assets/jigsaw24.png")
  img25=loadImage("assets/jigsaw25.png")
  img26=loadImage("assets/jigsaw26.png")
  img27=loadImage("assets/jigsaw27.png")
  img28=loadImage("assets/jigsaw28.png")
  img29=loadImage("assets/jigsaw29.png")

  img31=loadImage("assets/jigsaw31.png")
  img32=loadImage("assets/jigsaw32.png")
  img33=loadImage("assets/jigsaw33.png")
  img34=loadImage("assets/jigsaw34.png")
  img35=loadImage("assets/jigsaw35.png")
  img36=loadImage("assets/jigsaw36.png")
  img37=loadImage("assets/jigsaw37.png")
  img38=loadImage("assets/jigsaw38.png")
  img39=loadImage("assets/jigsaw39.png")


}


function setup() {
  let cnv=createCanvas(600, 600);
  cnv.parent("canvasContainer")

  p1img.push(imgp11)
  p1img.push(imgp12)
  p1img.push(imgp13)
  p1img.push(imgp14)
  p1img.push(imgp15)
  p1img.push(imgp16)
  p1img.push(imgp17)
  p1img.push(imgp18)
  p1img.push(imgp19)

  p2img.push(img21)
  p2img.push(img22)
  p2img.push(img23)
  p2img.push(img24)
  p2img.push(img25)
  p2img.push(img26)
  p2img.push(img27)
  p2img.push(img28)
  p2img.push(img29)

  p3img.push(img31)
  p3img.push(img32)
  p3img.push(img33)
  p3img.push(img34)
  p3img.push(img35)
  p3img.push(img36)
  p3img.push(img37)
  p3img.push(img38)
  p3img.push(img39)

  
  for(let x=0;x<3;x++){
    for(let y=0;y<3;y++){
      
     let p=new jigsaw(175+100*y,175+100*x)
      pieces.push(p)
    }
  }
   for(let x=0;x<3;x++){
    for(let y=0;y<3;y++){
      
     let b=new jigsaw(175+100*y,175+100*x)
      pieces2.push(b)
    }
  }

  for(let x=0;x<3;x++){
    for(let y=0;y<3;y++){
      
     let j=new jigsaw(175+100*y,175+100*x)
      pieces3.push(j)
    }
  }

}

function draw() {
  background(220);
  rect(275,275,300,300)
  strokeWeight(2)
  line(225,125,225,425)
  line(325,125,325,425)
  line(125,225,425,225)
  line(125,325,425,325)
  for(let i=0;i<pieces.length;i++){
    pieces[i].display()
    pieces[i].move()
    pieces[i].check()

    image(p1img[i],pieces[i].x-50,pieces[i].y-50,100,100)

   } 
    if (pieces[0].drag==false&&pieces[2].drag==false&&pieces[3].drag==false&&pieces[4].drag==false&&pieces[5].drag==false&&pieces[6].drag==false&&pieces[7].drag==false&&pieces[8].drag==false&&pieces[1].drag==false){
      fill(0)
      phase2=true
    }
  if(phase2==true){
    push()
    stroke(255)
    line(225,125,225,425)
  line(325,125,325,425)
  line(125,225,425,225)
  line(125,325,425,325)
  pop()
    for(let i=0;i<pieces2.length;i++){
    pieces2[i].display()
    pieces2[i].move()
    pieces2[i].check()

    image(p2img[i],pieces2[i].x-50,pieces2[i].y-50,100,100)
   } 
    
  }
  if (pieces2[0].drag==false&&pieces2[2].drag==false&&pieces2[3].drag==false&&pieces2[4].drag==false&&pieces2[5].drag==false&&pieces2[6].drag==false&&pieces2[7].drag==false&&pieces2[8].drag==false&&pieces2[1].drag==false){
    fill(0)
    phase3=true
  }

  if(phase3==true){
    push()
    stroke(255)
    line(225,125,225,425)
  line(325,125,325,425)
  line(125,225,425,225)
  line(125,325,425,325)
  pop()
    for(let i=0;i<pieces3.length;i++){
    pieces3[i].display()
    pieces3[i].move()
    pieces3[i].check()

    image(p3img[i],pieces3[i].x-50,pieces3[i].y-50,100,100)


   } 
    if (pieces3[0].drag==false&&pieces3[2].drag==false&&pieces3[3].drag==false&&pieces3[4].drag==false&&pieces3[5].drag==false&&pieces3[6].drag==false&&pieces3[7].drag==false&&pieces3[8].drag==false&&pieces3[1].drag==false){
    fill(0)
    text("HELP----PLEH",100,100)
  }
  }

  

}
class jigsaw{
  constructor(dx,dy){
    this.drag=true
    this.x=random(0,width)
    this.y=random(0,height)
    this.dx=dx
    this.dy=dy
  }
  display(){
    rectMode(CENTER)
    rect(this.x,this.y,50,50)
  }
  move(){  if(mouseIsPressed&&dist(this.x,this.y,mouseX,mouseY)<50&&this.drag==true){
    this.x=mouseX
    this.y=mouseY
    rect(this.x,this.y,110,110)
  }
  }
  check(){
    if(this.drag==true&&dist(this.x,this.y,this.dx,this.dy)<25){
      this.drag=false
      this.x=this.dx
      this.y=this.dy
      
    }
  }
}
