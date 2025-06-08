function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth / 1.5, windowHeight / 1.5);
  background(255);
  redraw();
}

function draw() {
  background("white");

  let cols = 40;
  let rows = 40;
  let size = width / cols;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * size;
      let y = j * size;

      let randomDirection = random() < 0.5;
      strokeWeight(3);
      if (randomDirection) {
        line(x, y, x + size, y + size);
      } else {
        line(x + size, y, x, y + size);
      }
    }
  }
}

function mousePressed() {
  redraw();
}
