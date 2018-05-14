/*
GAME FUNCTION:  
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const ui_game = document.querySelector("#game"),
      ui_minNum = document.querySelector(".min-num"),
      ui_maxNum = document.querySelector(".max-num"),
      ui_guessBtn = document.querySelector("#guess-btn"),
      ui_guessInput = document.querySelector("#guess-input"),
      ui_message = document.querySelector(".message");

// Assign UI min and max
ui_minNum.textContent = min;
ui_maxNum.textContent = max;

// Listen for guess
ui_guessBtn.addEventListener("click", function() {
  let guess = parseInt(ui_guessInput.value);
  

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){
    // Disable input
    ui_guessInput.disabled = true;
    // Change border color
    ui_guessInput.style.borderColor = "green";
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  } else {

  }
});

// Set message
function setMessage(msg, color){
  ui_message.style.color = color;
  ui_message.textContent = msg;
}



