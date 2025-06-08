let axiom = "FX";
let sentence = axiom;
let len = 400;
let angle;
let rules = [
  { a: "X", b: "X+YF+" },
  { a: "Y", b: "-FX-Y" }
];
let button;
let iterations = 0;
const maxIterations = 13;

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  angle = HALF_PI; // 90 degrees

  button = createButton("generate");
  button.parent(document.querySelector('.sketch'));
  button.position(width * 0.95, height * 0.95);
  button.mousePressed(generate);

  background(255);
  stroke(0);
  noFill();
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
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
  len *= 0.7071; // shrink by cos(45°)
  iterations++;

  if (iterations >= maxIterations) {
    button.attribute("disabled", "");
  }
}

function drawLSystem() {
  push();
  for (let char of sentence) {
    if (char === "F") {
      line(0, 0, len, 0);
      translate(len, 0);
    } else if (char === "+") {
      rotate(angle);
    } else if (char === "-") {
      rotate(-angle);
    }
  }
  pop();
}
