let cols, rows;
let spacing = 23;

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  cols = width / spacing;
  rows = height / spacing;
  noStroke();
  fill(255);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth / 1.5, windowHeight / 1.5);
  background(255);
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

