var axiom = "F";
var sentence = axiom;
var len = 100;
var angle;
var iteration = 0;
var maxIterations = 4;

var rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]",
};

var button;

function genString() {
  if (iteration >= maxIterations) {
    button.attribute("disabled", "");
    return;
  }

  len *= 0.5;
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++) {
      if (current == rules[j].a) {
        found = true;
        nextSentence += rules[j].b;
        break;
      }
    }
    if (!found) {
      nextSentence += current;
    }
  }
  sentence = nextSentence;
  iteration++;
  genVisual();
}

function genVisual() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    if (current == "F") {
      line(0, 0, 0, -len);
      translate(0, -len);
    } else if (current == "+") {
      rotate(angle);
    } else if (current == "-") {
      rotate(-angle);
    } else if (current == "[") {
      push();
    } else if (current == "]") {
      pop();
    }
  }
}

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  angle = radians(25);
  background(51);
  genVisual();
  button = createButton("generate");
  button.parent(document.querySelector('.sketch'));
  button.position(width * 0.95, height * 0.95);
  button.mousePressed(genString);
}

function windowResized() {
  resizeCanvas(windowWidth / 1.2, windowHeight / 1.5);
  background(255);
}

function draw() {}
