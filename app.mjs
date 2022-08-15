// DOM elements variables
const resetBtn = document.querySelector("#reset-btn"),
  showRedact = document.querySelector(".show-result"),
  rightSide = document.querySelector(".right-side"),
  submitBtn = document.querySelector("#submit-btn"),
  redactedDetails = document.querySelector(".redacted-details"),
  totalWords = document.querySelector("#total-words"),
  totalCharacters = document.querySelector("#total-characters"),
  totalRedacted = document.querySelector("#total-redacted"),
  totalTime = document.querySelector("#total-time");

function startApp() {
  submitBtn.addEventListener("click", getRedact)
};

// function to redact text on click
function getRedact(e) {
  let start = performance.now();
  const textContent = document.querySelector("#text-area").value;
  const redactedWords = document.querySelector("#redacted-words").value;
  const redactSymbol = document.querySelector("#redact-sym").value;
  const textContentSplit = textContent.split(" ");
  const totalTextChar = textContentSplit.join("")
  const redactedWordSplit = redactedWords.split(" ");
  const totalRedactWords = []

  for (let item of redactedWordSplit) {
    if (textContentSplit.includes(item)) {
      totalRedactWords.push(item)
      const index = textContentSplit.findIndex((el) => el === item)
      textContentSplit[index] = new String(convertSymbol(item, redactSymbol))
    }
  }
  console.log(textContentSplit)
  showRedact.textContent = textContentSplit.join(" ")

  totalWords.textContent = textContentSplit.length;
  totalCharacters.textContent = totalTextChar.length;
  totalRedacted.textContent = totalRedactWords.length
  console.log(textContentSplit.length);

  let timeTaken = (performance.now() - start).toFixed(2);
  totalTime.textContent = timeTaken + "ms";
  console.log(timeTaken + "ms")

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

// Function to count number of words scanned.

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //