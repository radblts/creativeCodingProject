let pendulums = [];
let pendulumCount = 40;
let hueVal = 0;
let speedSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);

  speedSlider = createSlider(0, 3, 1, 0.01);
  speedSlider.position(20, 20);
  speedSlider.style('width', '200px');

  for (let i = 0; i < pendulumCount; i++) {
    pendulums.push({
      angle: 0,
      angleSpeed: 0.01 + i * 0.004,
      radius: 30 + i * 6,
    });
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);

  hueVal = (hueVal + 1) % 360;
  let speed = speedSlider.value();

  for (let i = 0; i < pendulumCount; i++) {
    let p = pendulums[i];
    p.angle += p.angleSpeed * speed;

    let x = p.radius * cos(p.angle);
    let y = p.radius * sin(p.angle);

    let h = (hueVal + i * 10) % 360;
    stroke(h, 80, 80, 80);
    fill(h, 80, 80);
    line(0, 0, x, y);
    ellipse(x, y, 5);
  }

  noStroke();
  fill(0);
  text('Speed: ' + speed.toFixed(2), speedSlider.x * 2 + speedSlider.width, 35);
}
