let cellSize = 15;
let columns, rows;
let current = [];
let next = [];

function setup() {
  createCanvas(windowWidth / 1.5, windowHeight / 1.5);
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

function windowResized() {
  resizeCanvas(windowWidth / 1.5, windowHeight / 1.5);
  background(255);
}

function draw() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      let value = current[x][y];

      if (value === 1) {
        let neighbors = countNeighbors(x, y);

        let r = map(neighbors, 0, 8, 50, 255);
        let g = map(neighbors, 0, 8, 150, 50);
        let b = map(neighbors, 0, 8, 255, 50);

        fill(r, g, b);
      } else {
        fill(255);
      }

      stroke(0);
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }

  generate();
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

function generate() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      let neighbors = countNeighbors(x, y);
      let state = current[x][y];

      if (state === 1 && (neighbors < 2 || neighbors > 3)) {
        next[x][y] = 0; 
      } else if (state === 0 && neighbors === 3) {
        next[x][y] = 1; 
      } else {
        next[x][y] = state;
      }
    }
  }

  let temp = current;
  current = next;
  next = temp;
}

function countNeighbors(x, y) {
  let total = 0;

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;

      let col = (x + dx + columns) % columns;
      let row = (y + dy + rows) % rows;

      total += current[col][row];
    }
  }

  return total;
}
