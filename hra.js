let currentPlayer = 'circle';

const handleButtonClick = (event) => {
  const button = event.target;
  if (!button.disabled) {
    button.classList.add(`board__field--${currentPlayer}`);
    button.disabled = true;
    currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
    updatePlayerTurnDisplay();
  }
};

for (let i = 1; i <= 10; i++) {
  const button = document.querySelector(`button:nth-child(${i})`);
  button.addEventListener('click', handleButtonClick);
}

const updatePlayerTurnDisplay = () => {
  const playerTurnDisplay = document.querySelector('.player_turn');
  playerTurnDisplay.textContent = `Na tahu je: ${currentPlayer}`;
};

const restartButton = document.querySelector('.button__restart');
restartButton.addEventListener('click', (e) => {
  const confirmation = confirm('Opravdu chceš začít hrát znovu?');
  if (!confirmation) {
    e.preventDefault();
  } else {
    location.reload();
  }
});
