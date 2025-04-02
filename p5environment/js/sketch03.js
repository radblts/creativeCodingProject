function setup() {
  createCanvas(2000, 1000);
  noLoop();
}

function draw() {
  background("white");

  let cols = 30;
  let rows = 30;
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
