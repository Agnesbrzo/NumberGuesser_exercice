let minNum = 1,
  maxNum = 10,
  winNum = getRandomNum(minNum, maxNum),
  guessesLeft = 3;

const gameDiv = document.querySelector(".game");
const minNumSpan = document.querySelector(".min-num");
const maxNumSpan = document.querySelector(".max-num");
const input = document.querySelector(".input-number");
const button = document.querySelector(".btn-game");
const message = document.querySelector(".message");

minNumSpan.textContent = minNum;
maxNumSpan.textContent = maxNum;

button.addEventListener("click", answerOptions);
gameDiv.addEventListener("mousedown", reloadPage);

function reloadPage(e) {
  if (e.target.classList.contains("play-again")) {
    window.location.reload();
  }
}

function answerOptions() {
  let guess = parseInt(input.value);

  if (isNaN(guess) || guess > maxNum || guess < minNum) {
    showMessage(
      `Plese enter the number between ${minNum} and ${maxNum}.`,
      "red"
    );
  } else if (guess === winNum) {
    input.disabled = true;
    playAgain();

    showMessage(
      `It\'s correct, the winning number is ${winNum}! Congratulation:)`,
      "green"
    );
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      input.disabled = true;
      playAgain();
      showMessage(`Game over, the winning number was ${winNum}`, "red");
    } else if (guessesLeft === 1) {
      showMessage(`Wrong answer, you have ${guessesLeft} more try`, "red");
    } else {
      showMessage(`Wrong answer, you have ${guessesLeft} more tries`, "red");
    }
  }
  input.value = "";
}

function showMessage(mes, color) {
  message.textContent = mes;
  message.style.color = color;
  input.style.borderWidth = "2px";
  input.style.borderColor = color;
}

function playAgain() {
  button.value = "Play again";
  button.classList.add("play-again");
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
