function setup() {
  createCanvas(400, 400);
  background("white");
}

function draw() {
  let cols = 4;
  let rows = 4;
  let cellSize = width / cols;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellSize;
      let y = j * cellSize;
      rect(x, y, cellSize);
    }
  }
}
