/*
GAME FUNCTION
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
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  console.log(guess);

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if(guess === winningNum) {
    // Game over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
    
  } else {
    guessesLeft--;

    if(guessesLeft === 0){
      // Game over - lost      
      gameOver(false, `Game Over, you lost. The corect number was ${winningNum}`);      
    } else {
      // Game continues - answer wrong

      // Change border color
      guessInput.style.borderColor = 'red';
      // Clear Input
      guessInput.value = '';
      // Set message
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
    }

  }
});

// Game Over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Diable input
  guessInput.disabled = true;    
  // Change border color
  guessInput.style.borderColor = color;  
  // Set message
  setMessage(msg, color);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}