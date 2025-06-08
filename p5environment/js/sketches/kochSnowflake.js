let axiom = "F";
let sentence = axiom;
let len = 600;
let angle;
let rules = [{ a: "F", b: "F+F--F+F" }];
let button;
let iterations = 0;
let maxIterations = 5;

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  angle = PI / 3; // 60 degrees

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
  translate(100, height / 2);
  drawLSystem();
}

function generate() {
  if (iterations >= maxIterations) {
    button.attribute("disabled", "");
    return;
  }

  let next = "";

  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];
    let replaced = false;

    for (let rule of rules) {
      if (ch === rule.a) {
        next += rule.b;
        replaced = true;
        break;
      }
    }

    if (!replaced) next += ch;
  }

  sentence = next;
  len /= 3;
  iterations++;

  if (iterations >= maxIterations) {
    button.attribute("disabled", "");
  }
}

function drawLSystem() {
  push();
  for (let ch of sentence) {
    if (ch === "F") {
      line(0, 0, len, 0);
      translate(len, 0);
    } else if (ch === "+") {
      rotate(angle);
    } else if (ch === "-") {
      rotate(-angle);
    }
  }
  pop();
}
