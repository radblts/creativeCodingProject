let balls = [];
let walls = [];
let dragging = null;
let dragOffset;

let sectionCount = 5;
let wallHeight = 0.5;

let palette = [];

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));

  palette = [
    color(255, 100, 100),
    color(100, 255, 100),
    color(100, 100, 255),
    color(255, 255, 100),
    color(255, 100, 255)
  ];

  // Place vertical dividers (walls) between sections
  for (let i = 1; i < sectionCount; i++) {
    walls.push((width / sectionCount) * i);
  }

  // Spawn some balls above the canvas
  for (let i = 0; i < 50; i++) {
    let r = random(10, 30);
    let x = random(r, width - r);
    let y = random(-height, 0);
    let c = random(palette);
    balls.push(new Ball(x, y, r, c));
  }
}

function draw() {
  background(245);

  // Instruction prompt
  fill(60, 60, 60, 100);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(26);
  text("Drag and sort the balls into the sections below", width / 2, height * 0.25);

  // Draw vertical walls from bottom to halfway up
  stroke(0);
  strokeWeight(3);
  for (let x of walls) {
    line(x, height, x, height * wallHeight);
  }

  // Update and display balls
  for (let b of balls) {
    if (b !== dragging) {
      b.update();
      b.checkEdges();
      b.checkWalls();
    } else {
      b.pos.set(mouseX + dragOffset.x, mouseY + dragOffset.y);
      b.vel.set(0, 0);
    }
  }

  // Handle collisions
  for (let i = 0; i < balls.length; i++) {
    for (let j = i + 1; j < balls.length; j++) {
      balls[i].collide(balls[j]);
    }
  }

  for (let b of balls) {
    b.show();
  }
}

function mousePressed() {
  for (let b of balls) {
    if (dist(mouseX, mouseY, b.pos.x, b.pos.y) < b.r) {
      dragging = b;
      dragOffset = createVector(b.pos.x - mouseX, b.pos.y - mouseY);
      break;
    }
  }
}

function mouseReleased() {
  dragging = null;
}

class Ball {
  constructor(x, y, r, col) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.r = r;
    this.mass = r * 0.1;
    this.col = col;
  }

  applyForce(f) {
    this.acc.add(p5.Vector.div(f, this.mass));
  }

  update() {
    this.applyForce(createVector(0, 0.2 * this.mass)); // gravity
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  checkEdges() {
    if (this.pos.y + this.r > height) {
      this.pos.y = height - this.r;
      this.vel.y *= -0.7;
    }
    if (this.pos.y - this.r < 0) {
      this.pos.y = this.r;
      this.vel.y *= -0.7;
    }
    if (this.pos.x - this.r < 0) {
      this.pos.x = this.r;
      this.vel.x *= -0.7;
    }
    if (this.pos.x + this.r > width) {
      this.pos.x = width - this.r;
      this.vel.x *= -0.7;
    }
  }

  checkWalls() {
    if (this.pos.y + this.r > height * wallHeight) {
      for (let x of walls) {
        let dx = abs(this.pos.x - x);
        if (dx < this.r) {
          this.pos.x = this.pos.x < x ? x - this.r : x + this.r;
          this.vel.x *= -0.7;
        }
      }
    }
  }

  collide(other) {
    let d = p5.Vector.sub(other.pos, this.pos);
    let distMag = d.mag();
    let minDist = this.r + other.r;

    if (distMag < minDist) {
      let overlap = (minDist - distMag) / 2;
      let correction = d.copy().normalize().mult(overlap);
      other.pos.add(correction);
      this.pos.sub(correction);

      let normal = d.copy().normalize();
      let relVel = p5.Vector.sub(this.vel, other.vel);
      let speed = relVel.dot(normal);

      if (speed < 0) return;

      let impulse = (2 * speed) / (this.mass + other.mass);
      this.vel.sub(p5.Vector.mult(normal, impulse * other.mass));
      other.vel.add(p5.Vector.mult(normal, impulse * this.mass));
    }
  }

  show() {
    noStroke();
    fill(this.col);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
