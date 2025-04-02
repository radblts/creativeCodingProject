let r, g, b;

function setup() {
  createCanvas(2000, 1000);

  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(255, 10);
  noFill();
  stroke(r, g, b);

  let w = random(20, 500);
  let h = random(20, 500);
  rect(mouseX - w / 2, mouseY - h / 2, w, h);
}

function mousePressed() {
  r = random(255);
  g = random(255);
  b = random(255);
}
