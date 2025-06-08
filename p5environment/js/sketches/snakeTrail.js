let x, y;
let trail = [];

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  x = width / 2;
  y = height / 2;
  noStroke();
}

function windowResized() {
  resizeCanvas(windowWidth / 1.2, windowHeight / 1.5);
  background(255);
}

function draw() {
  background(220);

  let dx = mouseX - x;
  let dy = mouseY - y;

  x += dx * 0.1;
  y += dy * 0.1;

  let speed = dist(0, 0, dx * 0.1, dy * 0.1);
  let brightness = map(speed, 0, 20, 50, 255);
  fill(255, brightness, 100);

  trail.push({ x: x, y: y, alpha: 255 });

  for (let i = trail.length - 1; i >= 0; i--) {
    let t = trail[i];
    fill(100, 150, 255, t.alpha);
    ellipse(t.x, t.y, 30);
    t.alpha -= 5;
    if (t.alpha <= 0) {
      trail.splice(i, 1);
    }
  }

  fill(255, 100, 150);
  ellipse(x, y, 50);
}
