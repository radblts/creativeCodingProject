let cols, rows;
let spacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = width / spacing;
  rows = height / spacing;
  noStroke();
  fill(255);
  background(0);
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * spacing + spacing / 2;
      let y = j * spacing + spacing / 2;

      let dx = x - mouseX;
      let dy = y - mouseY;
      let d = sqrt(dx * dx + dy * dy);

      let maxDist = 150;
      let moveStrength = 50;

      let tx = x;
      let ty = y;
      if (d < maxDist) {
        let angle = atan2(dy, dx);
        let move = map(d, 0, maxDist, moveStrength, 0);
        tx = x + cos(angle) * move;
        ty = y + sin(angle) * move;
      }

      ellipse(tx, ty, 6, 6);
    }
  }
}

