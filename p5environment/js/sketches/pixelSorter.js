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

function windowResized() {
  resizeCanvas(windowWidth / 1.2, windowHeight / 1.5);
  background(255);
}

function draw() {}

function mousePressed() {
  img.loadPixels();

  let pixelArray = [];

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (y * img.width + x) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];
      let sum = r + g + b + a;

      pixelArray.push({ r, g, b, a, sum });
    }
  }

  pixelArray.sort((a, b) => a.sum - b.sum);

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (y * img.width + x) * 4;
      let sortedPixel = pixelArray[y * img.width + x];

      img.pixels[index] = sortedPixel.r;
      img.pixels[index + 1] = sortedPixel.g;
      img.pixels[index + 2] = sortedPixel.b;
      img.pixels[index + 3] = sortedPixel.a;
    }
  }

  img.updatePixels();
  image(img, 0, 0, 400, 400);
}
