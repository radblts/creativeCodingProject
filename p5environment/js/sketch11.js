let hueValue = 0; // starting hue

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  noFill();

    stroke(hueValue, 100, 100); 
    hueValue = (hueValue + 1) % 360;

    let w = random(20, 500);
    let h = random(20, 500);
    circle(mouseX, mouseY, 100);
}
