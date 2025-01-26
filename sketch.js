let font1; 

let sentence = '';

let userinput; 
let button; 
let userLine;

let poem = [];

let txt = "";


function preload(){
  font1 = loadFont('assets/IMFellEnglishSC-Regular.ttf', nextWord);
}


function setup() {
  createCanvas(400, 400);
  frameRate(0.5);
  //customise text here
  textFont(font1);
  textSize(28);

  // textbox and button function
  userInput = createInput();
  userInput.position(60, 80);
  button = createButton('write new line');
  button.position(userInput.x + userInput.width, userInput.y);
  button.mousePressed(newLine);
}

function draw() {
  background(250);
  nextWord();
}

function newLine(){
  userLine = userInput.value();
  userInput.value('');

  //edit text
  let words = RiTa.tokenize(userLine);
  let r = floor(random(0, words.length));
  let rhymes = RiTa.rhymesSync(words[r]);
  let changedWord = random(rhymes);
  words[r] = changedWord;
  userLine = RiTa.untokenize(words);

  poem.push(userLine);
}

function poemOutput(){
  for(x=0; x<poem.length; x++){
    text(poem[x], 40, 180 + x * 20);
  }
}

async function nextWord(){
  txt = "";
  for(x=0; x<poem.length; x++){
    txt += "\n" + poem[x];
  }

  let words = RiTa.tokenize(txt); // split into word

  // loop from a random spot
  let j = floor(random(0, words.length));
  for (let i = j; i < words.length + j; i++) {

    let idx = i % words.length;
    let word = words[idx].toLowerCase();
    if (word.length < 3) continue; // len >= 3

    // find related words
    let pos = RiTa.tagger.allTags(word)[0];
    let rhymes = await RiTa.rhymes(word, { pos });
    let sounds = await RiTa.soundsLike(word, { pos });
    let spells = await RiTa.spellsLike(word, { pos });
    let similars = [...rhymes, ...sounds, ...spells];

    // only words with 2 or more similars
    if (similars.length < 2) {
      console.log("No sims for "+word);
      continue;
    }

    // pick a random similar
    let next = RiTa.random(similars);

    if (next.includes(word) || word.includes(next)) {
      continue;                     // skip substrings
    }

    console.log("replace(" + idx + "): " + word + " -> " + next);

    words[idx] = next;             // do replacement
    break;
  }

  // recombine into string and display
  txt = RiTa.untokenize(words); 
  background(250);
  fill(54, 60, 66);
  text(txt, 50, 150, width - 50, height);
}
