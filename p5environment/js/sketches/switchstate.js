let agents = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 100; i++) {
    agents.push(new Agent(random(width), random(height)));
  }
}

function draw() {
  background(240);
  for (let a of agents) {
    a.update();
    a.display();
  }
}

class Agent {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.state = "moving";
    this.stateTimer = int(random(60, 180));
  }

  update() {
    this.stateTimer--;
    if (this.stateTimer <= 0) {
      // Switch state
      this.state = this.state === "moving" ? "resting" : "moving";
      this.stateTimer = int(random(60, 180));
    }

    if (this.state === "moving") {
      this.vel.add(p5.Vector.random2D().mult(0.2));
      this.vel.limit(2);
      this.pos.add(this.vel);
      this.edges();
    }
  }

  edges() {
    this.pos.x = (this.pos.x + width) % width;
    this.pos.y = (this.pos.y + height) % height;
  }

  display() {
    noStroke();
    fill(this.state === "moving" ? "blue" : "orange");
    ellipse(this.pos.x, this.pos.y, 6, 6);
  }
}
