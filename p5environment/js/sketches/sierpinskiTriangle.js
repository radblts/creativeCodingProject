let axiom = "A";
let sentence = axiom;
let len = 400;
let angle;
let rules = [
  { a: "A", b: "B-A-B" },
  { a: "B", b: "A+B+A" }
];
let button;
let iterations = 0;
const maxIterations = 6;

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  angle = PI / 3; // 60 degrees

  button = createButton("generate");
  button.parent(document.querySelector('.sketch'));
  button.position(width * 0.95, height * 0.95);
  button.mousePressed(generate);

  stroke(0);
  noFill();
}

function draw() {
  background(255);
  resetMatrix();

  // Center the shape
  let totalLen = len * Math.pow(2, iterations);
  let yOffset = (Math.sqrt(3) / 2) * totalLen / 2;

  translate(width / 2 - totalLen / 2, height / 2 + yOffset);
  drawLSystem();
}

function generate() {
  if (iterations >= maxIterations) {
    button.attribute("disabled", "");
    return;
  }

  let next = "";

  for (let char of sentence) {
    let replaced = false;

    for (let rule of rules) {
      if (char === rule.a) {
        next += rule.b;
        replaced = true;
        break;
      }
    }

    if (!replaced) next += char;
  }

  sentence = next;
  len *= 0.5;
  iterations++;

  if (iterations >= maxIterations) {
    button.attribute("disabled", "");
  }
}

function drawLSystem() {
  push();
  for (let char of sentence) {
    if (char === "A" || char === "B") {
      line(0, 0, len, 0);
      translate(len, 0);
    } else if (char === "+") {
      rotate(-angle);
    } else if (char === "-") {
      rotate(angle);
    }
  }
  pop();
}
