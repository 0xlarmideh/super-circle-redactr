// DOM elements variables
const redactSymbol = document.querySelector("#redact-symbol"),
  resetBtn = document.querySelector("#reset-btn"),
  showRedact = document.querySelector(".show-result"),
  rightSide = document.querySelector(".right-side"),
  submitBtn = document.querySelector("#submit-btn"),
  redactedDeatils = document.querySelector(".redacted-details"),
  totalWords = document.querySelector("#total-words"),
  totalCharacters = document.querySelector("#total-characters"),
  totalRedacted = document.querySelector("#total-redacted"),
  totalTime = document.querySelector("#total-time");


function startApp() {
  submitBtn.addEventListener("click", getRedact)
};

// function to redact text on click
rightSide.style.display = "none"
function getRedact(e) {
  const textContent = document.querySelector("#text-area").value;
  const redactedWords = document.querySelector("#redacted-words").value;
  const redactSymbol = document.querySelector("#redact-sym").value;
  const textContentSplit = textContent.split(" ");
  const redactedWordSplit = redactedWords.split(" ");

  for (let item of redactedWordSplit) {
    if (textContentSplit.includes(item)) {
      const index = textContentSplit.findIndex((el) => el === item)
      textContentSplit[index] = convertSymbol(item, redactSymbol)
    }
  }
  console.log(textContentSplit)
  rightSide.style.display = "block"
  showRedact.textContent = textContentSplit.join(" ")

  totalWords.textContent = numberOfWords(textContentSplit)
  e.preventDefault();
}

// function to convert strings to symbols
function convertSymbol(name, symbol = "@") {
  let newItem = ""
  for (let index = 0; index < name.length; index++) {
    if (symbol == "") {
      symbol = "@"
    }
    newItem += symbol
  } return newItem
}

let countWords = 0
// Function to count number of words scanned.
function numberOfWords(array) {
  for (let item of array) {
    countWords++
  } return countWords
}



// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //