let star = [];
let river = [];
let reflect = [];

let x = 0;
let y = 0;
let n = 200;
let sky = [];
let mountH1 = [];
let mountH2 = [];

function setup() {
  let cnv=createCanvas(800, 600);
  cnv.parent("canvasContainer")
  for (let i = 0; i < star.length; i++) {
    let newStar = new Star(200, 200);
    star.push(newStar);
  }
}

function draw() {
  //clouds
  push();
  x = constrain(x, 0, n);
  y = constrain(y, 0, n);
  push();
  translate(210, 150);
  sky.push(new cloud(x, x, y, y));
  push();
  for (let i = 0; i < sky.length; i++) {
    let flow = sky[i];
    rotate(radians(i));
    flow.update();
    flow.display();
  }
  pop();
  pop();
//
  push();
  translate(800-170,170);
  sky.push(new cloud(x, x, y, y));
  push();
  for (let i = 0; i < sky.length; i++) {
    let flow = sky[i];
    rotate(radians(i));
    flow.update();
    flow.display();
  }
  pop();
  pop();
//
  // if(800>900){
  //  push();
  // translate(800/2,250);
  // sky.push(new cloud(x, x, y, y));
  // push();
  // for (let i = 0; i < sky.length; i++) {
  //   let flow = sky[i];
  //   rotate(radians(i));
  //   flow.update();
  //   flow.display();
  // }
  // pop();
  // pop();}
//
  if (x == n) {
    x = 0;
    y = 0;
  }
  x += 1;
  y += 1;

  pop();

  //water

  river.push(new water());
  for (let i = 0; i < river.length; i++) {
    let flow = river[i];
    flow.display();
    flow.update();
    if (flow.done == true) {
      river.splice(i, 1);
    }
  }

  //star
  push();
  background(0, 40, 115, 30);
  for (let i = 0; i < star.length; i++) {
    star[i].update();
    star[i].display();

    star[i].checkdist(mouseX, mouseY);
    if (star[i].done == true) {
      star.splice(i, 1);
    }
  }
  //mountain
  push();
  for (i = 0; i < width; i++) {
    stroke(12, 35, 69);
    strokeWeight(3);
    if (150 + 150 * noise(0.02 * i) + i < (600 * 3) / 4) {
      line(
        3 * i,
        150 + 150 * noise(0.02 * i) + i,
        3 * i,
        (600 * 3) / 4
      );
      mountH1.push(150 + 150 * noise(0.02 * i) + i);
    }
    if (150 + 150 * noise(0.02 * i) + i > (600 * 3) / 4) {
      mountH1.push(800);
    }
    if (
      150 + 100 * noise(0.01 * (800 - i)) + i <
      (600 * 3) / 4
    ) {
      line(
        800 - 2.5 * i,
        150 + 100 * noise(0.01 * (800 - i)) + i,
        800 - 2.5 * i,
        (600 * 3) / 4
      );
      mountH2.push(150 + 100 * noise(0.01 * (800 - i)) + i);
    }
    if (
      150 + 100 * noise(0.01 * (800 - i)) + i >
      (600 * 3) / 4
    ) {
      mountH2.push(800);
    }
  }
  pop();
  pop();
  mountH1.length = constrain(mountH1.length, 0, 800);
  mountH2.length = constrain(mountH2.length, 0, 800);
}
function mousePressed() {
  if (
    mouseY < mountH1[floor(mouseX / 3)] &&
    mouseY < mountH2[floor((800 - mouseX) / 2.5)]
  ) {
    let newStar = new Star(mouseX, mouseY);
    star.push(newStar);
  }

  // if(mouseY<mountH2[floor((800-mouseX)/2.5)]){
  // let newStar=new Star(mouseX,mouseY)
  // star.push(newStar)
  // }
}

class Star {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.rx = this.x + random(-5, 5);

    this.r = 1;
    this.totalRing = 2;
    this.n = random(3, 9);
    this.deg = 1;
    this.numarc = 0;
    this.degree = floor(random(20, 180 / this.n));
    this.blue = random(70, 200);
    this.green = random(180, 220);
    this.numarc = floor(random(3, this.n));
    this.shouldGrow = false;
    this.change = false;
    this.done = false;

    this.reflectClock = 100;
    this.l = random(0, this.totalRing);
  }
  update() {
    if (this.change == false) {
      this.reflectClock++;
    } else {
      this.reflectClock = this.reflectClock - 1;
    }
    if (this.reflectClock == 99 || this.reflectClock == 201) {
      this.change = !this.change;
    }
    this.deg += 0.5;
    if (this.shouldGrow == true) {
      this.grow();
    }
    if (this.totalRing < 2) {
      this.done = true;
    }
  }

  grow() {
    this.totalRing=constrain(this.totalRing,0,30)
    if (mouseIsPressed) {
      this.totalRing += 1;
    } else {
      this.totalRing = this.totalRing - 0.02;
    }
  }
  display() {
    push();
    translate(this.x, this.y);

    for (let i = 0; i < this.totalRing; i++) {
      rotate(10 * i + radians(this.deg) * 0.1);
      push();
      rotate(radians(20 * i));
      stroke(255, this.green + i, this.blue + i, 255 - i);
      this.ring(0, 0, this.r * i * 10, this.numarc, this.degree);
      fill(255);
      circle(0, 0, 10);
      pop();
    }

    pop();
    this.reflect();
  }
  checkdist(mX, mY) {
    if (dist(this.x, this.y, mX, mY) < 15) {
      this.shouldGrow = true;
    } else this.shouldGrow = false;
  }
  reflect() {
    push();
    stroke(255, this.green, this.blue, this.reflectClock);
    for (let i = 0; i < this.totalRing; i++) {
      let localY = map(this.y, 0, (height * 3) / 4, (height * 3) / 4, height);
      let y = (height * 7) / 4 - localY;
      strokeWeight(10 - i);
      line(
        this.x - 30 * noise(i) - this.totalRing - i,
        y + 10 * i,
        this.x + 30 * noise(i) + this.totalRing + i,
        y + 10 * i
      );
    }
    pop();
  }

  ring(x, y, r, n, rl) {
    //x,y=center
    //r=circle r
    //n=number of arcs
    //rl=degree of arcs
    noFill();
    strokeWeight(4.8);
    let rg = (360 - n * rl) / n;
    for (let i = 0; i < n; i += 1) {
      arc(
        x,
        y,
        r,
        r,
        0 + i * radians(rl + rg),
        i * radians(rl + rg) + radians(rl)
      );
    }
  }
}
class water {
  constructor() {
    this.x1 = random(width);
    this.y1 = random((height * 3) / 4, height);
    this.x2 = random(width);
    this.y2 = random((height * 3) / 4, height);
    this.x3 = random(width);
    this.y3 = random((height * 3) / 4, height);

    this.l = random(10, 50);
    this.clock = 0;
    this.done = false;
    this.N = random(-30, 80);
  }
  update() {
    this.clock += 2.5;
    if (this.clock < 255) {
      stroke(0, 66 + this.N, 150 + this.N, this.clock);
    } else {
      stroke(0, 66 + this.N, 150 + this.N, 510 - this.clock);
    }
    if (510 - this.clock == 0) {
      this.done = true;
    }
  }
  display() {
    push();
    strokeWeight(10);
    line(this.x1 - this.l / 2, this.y1, this.x1 + this.l / 2, this.y1);
    line(this.x2 - this.l / 2, this.y2, this.x2 + this.l / 2, this.y2);
    //line(this.x3 - this.l / 2, this.y3, this.x3 + this.l / 2, this.y3);

    pop();
  }
}
class cloud {
  constructor(x1, x2, y1, y2) {
    this.x = random(x1, x2);
    this.y = random(y1, y2);
    this.l = random(20, 40);
    this.clock = 0;
    this.done = false;
    this.N = random(-20, 50);
  }
  update() {
    this.clock += 1;
    if (this.clock < 255) {
      stroke(84, 104 + this.N, 168 + this.N, this.clock);
    } else {
      stroke(84, 104 + this.N, 168 + this.N, 510 - this.clock);
    }
    if (510 - this.clock == 0) {
      this.done = true;
    }
  }
  display() {
    push();
    strokeWeight(10);
    line(this.x - this.l / 2, this.y, this.x + this.l / 2, this.y);
    pop();
  }
}
