// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!
const quotes = [
  { text: "is to create something expressive instead of something functional ", source: "Wikipedia" },//https://en.wikipedia.org/wiki/Creative_coding
  { text: "is an act of curiosity", source: "Patrik" },//https://www.patrik-huebner.com/datadesigndictionary/creative-coding/
  { text: "a new interdisciplinary art form that bridges the gap between technologists and artists", source: "Gorilla Sun" }, //https://www.gorillasun.de/blog/creative-coding-the-new-era/
  { text: "writing a poem", source: "Hunter" },//https://guidebook.hdyar.com/creative-coding/creative-coding-fundamentals/what-is-creative-coding/#top
  { text: "digital clay", source: "John" },//https://dl.acm.org/doi/abs/10.5555/553360 & https://www.flong.com/archive/texts/essays/essay_creative_code/index.html
  //Maeda argues that treating a computer like a digital canvas or paintbrush is too limiting. Instead, code is an autonomous artistic environment.
  //Just as a sculptor must understand the properties of marble or clay, a digital artist must understand the nature of code, logic, data input, and processing constraints to truly create
  { text: "making art with code", source: "Art + Code" },//https://processing.github.io/art-plus-code/codeAsCreativeMedium-intro/
  { text: "a School of Thought“ ", source: "Tim" },//https://trcc.timrodenbroeker.de/what-is-creative-coding/
  { text: "a chance for code to be wrong", source: "Sara" } //I personally like this one and found it quite inspiring because it is a reminder that mistakes are part of the process. So I am keeping this one in the array.
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable tht holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomSeed(millis());
  pickQuote(); // calls the function to pick a quote
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))];
}

function draw() {
  background(32, 100, 191);
  drawQuote(); // draw the quote on screen
}

function drawQuote() {
  // draw text
  fill(214, 59, 59);
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textSize(32);
  textStyle(BOLD);
  text("“" + current.text + "”", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote(); 
}
