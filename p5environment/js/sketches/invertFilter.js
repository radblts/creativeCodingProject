let img;

function preload() {
  img = loadImage("../../assets/imageFilter/catPet.png");
}

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  image(img, 0, 0, 400, 400);
}

function draw() {}

function mousePressed() {
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    let red = img.pixels[i + 0];
    let green = img.pixels[i + 1];
    let blue = img.pixels[i + 2];

    img.pixels[i + 0] = 255 - red;
    img.pixels[i + 1] = 255 - green;
    img.pixels[i + 2] = 255 - blue
  }
  img.updatePixels();
  image(img, 0, 0, 400, 400);
}
