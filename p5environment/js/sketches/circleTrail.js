let hueValue = 0; // starting hue

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  
  colorMode(HSB, 360, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth / 1.2, windowHeight / 1.5);
  background(255);
}

function draw() {
  noFill();

    stroke(hueValue, 100, 100); 
    hueValue = (hueValue + 1) % 360;

    let w = random(20, 500);
    let h = random(20, 500);
    circle(mouseX, mouseY, 100);
}
