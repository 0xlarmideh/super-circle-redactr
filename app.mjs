// DOM elements variables
const resetBtn = document.querySelector("#reset-btn"),
  showRedact = document.querySelector(".show-result"),
  submitBtn = document.querySelector("#submit-btn"),
  clearBtn = document.querySelector("#clear-btn"),
  totalWords = document.querySelector("#total-words"),
  totalCharacters = document.querySelector("#total-characters"),
  totalRedacted = document.querySelector("#total-redacted"),
  totalTime = document.querySelector("#total-time");

function startApp() {
  submitBtn.addEventListener("click", getRedact);
  clearBtn.addEventListener("click", clearAll)
};

// function to redact text on click
function getRedact(e) {
  // getting the execution time
  let start = performance.now();
  
  // Input value variables
  const textContent = document.querySelector("#text-area").value,
    redactedWords = document.querySelector("#redacted-words").value,
    redactSymbol = document.querySelector("#redact-sym").value,
    textContentSplit = textContent.split(/[\s]|[.,]/),
    totalTextChar = textContentSplit.join(""),
    redactedWordSplit = redactedWords.split(" "),
    totalRedactWords = [],
    newTextContentSplit = [];

  // Change redact words to lowercase
  for (let word of textContentSplit) {
    newTextContentSplit.push(word.toLowerCase())
  }

  // Find a match and replace with desired symbol
  for (let item of redactedWordSplit) {
    if (newTextContentSplit.includes(item.toLowerCase())) {
      totalRedactWords.push(item)
      const index = newTextContentSplit.findIndex((el) => el === item.toLowerCase())
      newTextContentSplit[index] = new String(convertSymbol(item, redactSymbol))
    }
  }

  // redaction results metrics
  showRedact.textContent = newTextContentSplit.join(" ");
  totalWords.textContent = textContentSplit.length;
  totalCharacters.textContent = totalTextChar.length;
  totalRedacted.textContent = totalRedactWords.length
  let timeTaken = (performance.now() - start).toFixed(2);
  totalTime.textContent = timeTaken + "ms";
  console.log(timeTaken + "ms")
  e.preventDefault();
}

// function to clear all inputs
function clearAll(e) {
  document.querySelector(".redact-form").reset();
  e.preventDefault();
}

// function to convert strings to symbols
function convertSymbol(name, symbol) {
  let newItem = ""
  for (let index = 0; index < name.length; index++) {
    if (symbol == "") {
      symbol = "@"
    }
    newItem += symbol
  } return newItem
}

// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //