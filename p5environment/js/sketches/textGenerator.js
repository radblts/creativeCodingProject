let txt;
let markov = {};
let order = 2;
let generatedText = "";
let button;

//Load text
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
    //.replace(/[^\w\s]/g, "") -> uncomment if you want no punctuation
    .split(/\s+/);

  buildMarkovChain(words);

  noLoop();
  redrawText();
}

//display generated text and reset background for the regen. button
function redrawText() {
  background(240);
  generatedText = generateText(150);
  text(generatedText, 10, 20, width - 20);
}

//markov chain -> take two words and add the following word, e.g. 1: "to be" -> "or", 2: "be or" -> "not"
//(the amount of key words is defined by the order)
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

//generate text -> randomly select a key and then put the next as the following key,
//until numWords is reached and save it as result
function generateText(numWords) {
  let keys = Object.keys(markov);
  let key = random(keys);
  let result = key.split(" ");

  console.log("Starting key:", key); //DEBUG: Initial key that was chosen

  for (let i = 0; i < numWords - order; i++) {
    let nextWords = markov[key];

    if (!nextWords) {
      console.warn("No followers for key:", key); //DEBUG: Key that has no followers
      break;
    }

    let next = random(nextWords); //-> random because the key may have multiple next words
    console.log(`Key: "${key}" → Next words: ${nextWords.join(", ")} → Chosen: "${next}"`); //DEBUG: next words and the chosen follower

    result.push(next);
    key = result.slice(result.length - order).join(" ");
  }

  return result.join(" ");
}