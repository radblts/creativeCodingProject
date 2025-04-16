var axiom = "F";
var sentence = axiom;
var len = 100;
var angle;

var rules = [];
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]",
};

function genString() {
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
  createP(sentence);
  genVisual();
}

function genVisual() {
  background(51);
  resetMatrix();
  translate(width / 2, height);
  stroke(255);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    switch (current) {
      case "F":
        //Move forward by line length drawing a line
        line(0, 0, 0, -len);
        translate(0, -len);
        break;
      case "f":
        //Move forward by line length without drawing a line
        break;
      case "+":
        //Turn left by turning angle
        rotate(angle);
        break;
      case "-":
        //Turn right by turning angle
        rotate(-angle);
        break;
      case "|":
        //Reverse direction (ie: turn by 180 degrees)
        break;
      case "[":
        //Push current drawing state onto stack
        push();
        break;
      case "]":
        //Pop current drawing state from the stack
        pop();
        break;
      case "#":
        //Increment the line width by line width increment
        break;
      case "!":
        //Decrement the line width by line width increment
        break;
      case "@":
        //Draw a dot with line width radius
        break;
      case "{":
        //Open a polygon
        break;
      case "}":
        //Close a polygon and fill it with fill colour
        break;
      case ">":
        //Multiply the line length by the line length scale factor
        break;
      case "<":
        //Divide the line length by the line length scale factor
        break;
      case "&":
        //Swap the meaning of + and -
        break;
      case "(":
        //Decrement turning angle by turning angle increment
        break;
      case ")":
        //Increment turning angle by turning angle increment
        break;
    }
  }
}

function setup() {
  createCanvas(400, 400);
  angle = radians(25);
  background(51);
  createP(axiom);
  genVisual();
  var button = createButton("generate");
  button.mousePressed(genString);
}
function draw() {}
