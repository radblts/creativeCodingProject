function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
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
