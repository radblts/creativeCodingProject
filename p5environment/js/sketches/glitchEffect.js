let img;
let glitchImg;

function preload() {
  // Load the image from URL
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg');
}

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  glitchImg = createImage(img.width, img.height);
  frameRate(5);
}

function windowResized() {
  resizeCanvas(windowWidth / 1.2, windowHeight / 1.5);
  background(255);
}

function draw() {
  glitchEffect();
  image(glitchImg, 0, 0);
}

function glitchEffect() {
  img.loadPixels();
  glitchImg.loadPixels();

  for (let y = 0; y < img.height; y++) {
    // One random horizontal shift per row for red and blue channels
    let offsetR = int(random(-10, 10));
    let offsetB = int(random(-10, 10));

    for (let x = 0; x < img.width; x++) {
      let srcXr = constrain(x + offsetR, 0, img.width - 1);
      let srcXb = constrain(x + offsetB, 0, img.width - 1);

      let i = (x + y * img.width) * 4;
      let rI = (srcXr + y * img.width) * 4;
      let bI = (srcXb + y * img.width) * 4;

      glitchImg.pixels[i] = img.pixels[rI];
      glitchImg.pixels[i + 1] = img.pixels[i + 1];
      glitchImg.pixels[i + 2] = img.pixels[bI + 2];
      glitchImg.pixels[i + 3] = 255;
    }
  }

  glitchImg.updatePixels();
}
