let img;

function preload() {
  img = loadImage("../../assets/dithering/catPet.png");
}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0, 400, 400);
}

function draw() {}

function mousePressed() {
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
    let red = img.pixels[i + 0];
    let green = img.pixels[i + 1];
    let blue = img.pixels[i + 2];

    let imgPixelValue = red + green + blue;
    let randomPixelValue = random(255 * 3);

    if (imgPixelValue < randomPixelValue) {
      img.pixels[i + 0] = 0;
      img.pixels[i + 1] = 0;
      img.pixels[i + 2] = 0;
    } else {
      img.pixels[i + 0] = 255;
      img.pixels[i + 1] = 255;
      img.pixels[i + 2] = 255;
    }
  }
  img.updatePixels();
  image(img, 0, 0, 400, 400);
}
