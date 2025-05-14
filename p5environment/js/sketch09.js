let cellSize = 15;
let columns, rows;
let current = [];
let next = [];

function setup() {
  createCanvas(1000, 1000);
  frameRate(10);

  columns = floor(width / cellSize);
  rows = floor(height / cellSize);

  for (let x = 0; x < columns; x++) {
    current[x] = [];
    next[x] = [];
    for (let y = 0; y < rows; y++) {
      current[x][y] = 0;
      next[x][y] = 0;
    }
  }

  noLoop();
}

function draw() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      let value = current[x][y];
      if (value === 1) fill(0);
      else fill(255);
      stroke(0);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
}

function mousePressed() {
  randomizeBoard();
  loop();
}

function randomizeBoard() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      current[x][y] = random([0, 1]);
    }
  }
}
