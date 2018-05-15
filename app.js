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

// Play again event listener
ui_game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

// Listen for guess
ui_guessBtn.addEventListener("click", function() {
  let guess = parseInt(ui_guessInput.value);
  

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum){
    // Game over won.
    gameOver(true, `${winningNum} is correct, YOU WIN!!`);

  } else {
    // Wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);
     
    } else {
      // Game continues - answer wrong

      // Change border color
      ui_guessInput.style.borderColor = "red";

      // Clear input
      ui_guessInput.value = '';

      // Tell user it's the wrong number.
      setMessage(`${guess} is not correct. You have ${guessesLeft} guesses left.`, "red");

    }
  }
});

function gameOver(won,msg){
  let color;
  won === true ? color = "green" : color = "red";

  // Disable input
  ui_guessInput.disabled = true;
  // Change border color
  ui_guessInput.style.borderColor = color;
  // Set text color
  ui_message.style.color = color;
  // Set message
  setMessage(msg);

  // Play again?
  ui_guessBtn.value = 'Play Again';
  ui_guessBtn.className += 'play-again'
}

// Set message
function setMessage(msg, color){
  ui_message.style.color = color;
  ui_message.textContent = msg;
}



