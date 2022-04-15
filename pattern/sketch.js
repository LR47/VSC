function setup() {
  let cnv=createCanvas(600, 600);
  cnv.parent("canvasContainer")
  noStroke()
 for(let x=0;x<width;x+=50){
   for(let y=0; y<height;y+=50){
     fill(0,0,0,random(40))
     rect(x,y,random(0,80),random(0,80))
   }
 }
//  for(let x=0;x<width;x+=50){
//    for(let y=0; y<height;y+=50){
//      fill(x,y,0,random(40,80))
//      push()
//      translate(x,y)
//     rotate(radians(45))
//      rect(0,0,random(0,50),random(0,50))
//      pop()
//    }
//  }
//   for(let x=0;x<width;x+=80){
//    for(let y=0; y<height;y+=80){
//      fill(0,y,x,random(20,40))
//      push()
//      translate(x,y)
//     rotate(radians(90))
//      rect(0,0,random(30,80),random(30,80))
//      pop()
//    }
//  }
  
}

