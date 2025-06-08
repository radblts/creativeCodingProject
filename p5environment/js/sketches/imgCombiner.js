let img1, img2;
let baseWidth, baseHeight;
let mode = 'rows';

function preload() {
  img1 = loadImage('https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*');
  img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/960px-Cat_November_2010-1a.jpg');
}

function setup() {
  if (img1.width * img1.height < img2.width * img2.height) {
    baseWidth = img1.width;
    baseHeight = img1.height;
  } else {
    baseWidth = img2.width;
    baseHeight = img2.height;
  }

  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);

  img1.resize(baseWidth, baseHeight);
  img2.resize(baseWidth, baseHeight);

  noLoop(); 
}

function windowResized() {
  resizeCanvas(windowWidth / 1.2, windowHeight / 1.5);
  background(255);
}

function draw() {
  img1.loadPixels();
  img2.loadPixels();

  let blended = createImage(baseWidth, baseHeight);
  blended.loadPixels();

  for (let y = 0; y < baseHeight; y++) {
    for (let x = 0; x < baseWidth; x++) {
      let i = (y * baseWidth + x) * 4;
      let fromImg = (mode === 'rows')
        ? (y % 2 === 0 ? img1 : img2)
        : (x % 2 === 0 ? img1 : img2);

      blended.pixels[i + 0] = fromImg.pixels[i + 0]; 
      blended.pixels[i + 1] = fromImg.pixels[i + 1]; 
      blended.pixels[i + 2] = fromImg.pixels[i + 2]; 
      blended.pixels[i + 3] = fromImg.pixels[i + 3]; 
    }
  }

  blended.updatePixels();
  background(255);

  let offsetX = (width - baseWidth) / 2;
  let offsetY = (height - baseHeight) / 2;
  image(blended, offsetX, offsetY);
}

function keyPressed() {
  if (key === 'r') {
    mode = 'rows';
    redraw();
  }
  if (key === 'c') {
    mode = 'columns';
    redraw();
  }
}
