let txt;
let markov = {};
let order = 2;
let generatedText = "";
let button;

function preload() {
  txt = loadStrings("../../assets/textGenerator/shakespeare.txt");
}

function setup() {
  canvas = createCanvas(windowWidth / 1.2, windowHeight / 1.5);
  canvas.parent(document.querySelector('.sketch'));
  background(255);
  background(240);
  textFont("Courier New");
  textSize(14);
  fill(20);

  button = createButton("Regenerate Text");
  button.parent(document.querySelector('.sketch'));
  button.position(width * 0.50, height * 0.95);
  button.mousePressed(redrawText);

  let fullText = txt.join(" ");
  let words = fullText
    .toLowerCase()
    .split(/\s+/);

  buildMarkovChain(words);

  noLoop();
  redrawText();
}

function windowResized() {
  resizeCanvas(windowWidth / 1.2, windowHeight / 1.5);
  background(255);
}

function redrawText() {
  background(240);
  generatedText = generateText(150);
  text(generatedText, 10, 20, width - 20);
}

function buildMarkovChain(words) {
  for (let i = 0; i < words.length - order; i++) {
    let key = words.slice(i, i + order).join(" ");
    let next = words[i + order];
    if (!markov[key]) {
      markov[key] = [];
    }
    markov[key].push(next);
  }
}

function generateText(numWords) {
  let keys = Object.keys(markov);
  let key = random(keys);
  let result = key.split(" ");

  console.log("Starting key:", key);

  for (let i = 0; i < numWords - order; i++) {
    let nextWords = markov[key];

    if (!nextWords) {
      console.warn("No followers for key:", key); 
      break;
    }

    let next = random(nextWords); 
    console.log(`Key: "${key}" → Next words: ${nextWords.join(", ")} → Chosen: "${next}"`);
    result.push(next);
    key = result.slice(result.length - order).join(" ");
  }

  return result.join(" ");
}