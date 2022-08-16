// DOM elements variables
const resetBtn = document.querySelector("#reset-btn"),
  showRedact = document.querySelector(".show-result"),
  rightSide = document.querySelector(".right-side"),
  submitBtn = document.querySelector("#submit-btn"),
  clearBtn = document.querySelector("#clear-btn"),
  redactedDetails = document.querySelector(".redacted-details"),
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
  let start = performance.now();
  const textContent = document.querySelector("#text-area").value,
    redactedWords = document.querySelector("#redacted-words").value,
    redactSymbol = document.querySelector("#redact-sym").value,
    textContentSplit = textContent.split(/[\s]|[.,?;:"'-'"]/),
    totalTextChar = textContentSplit.join(""),
    redactedWordSplit = redactedWords.split(" "),
    totalRedactWords = [],
    newTextContentSplit = [];
  for (let x of textContentSplit) {
    newTextContentSplit.push(x.toLowerCase())
  }

  for (let item of redactedWordSplit) {
    if (newTextContentSplit.includes(item.toLowerCase())) {
      totalRedactWords.push(item)
      const index = newTextContentSplit.findIndex((el) => el === item.toLowerCase())
      newTextContentSplit[index] = new String(convertSymbol(item, redactSymbol))
    }
  }
  // console.log(newTextContentSplit)
  showRedact.textContent = newTextContentSplit.join(" ");
  totalWords.textContent = textContentSplit.length;
  totalCharacters.textContent = totalTextChar.length;
  totalRedacted.textContent = totalRedactWords.length
  // console.log(newTextContentSplit.length);

  let timeTaken = (performance.now() - start).toFixed(2);
  totalTime.textContent = timeTaken + "ms";
  console.log(timeTaken + "ms")
  e.preventDefault();
}

function clearAll(e) {
  document.querySelector(".redact-form").reset();
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