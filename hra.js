let currentPlayer = 'circle';

const buttons = document.querySelectorAll('.field');

const addSymbol = (button) => {
  if (currentPlayer === 'circle') {
    currentPlayer = 'cross';
  } else {
    currentPlayer = 'circle';
  }

  button.disabled = true;
};

const updatePlayerInfo = () => {
  const playerInfo = document.querySelector('.piskvorky__menu--icon');

  let symbolP;

  if (currentPlayer === 'circle') {
    symbolP = 'Kolečko';
  } else {
    symbolP = 'Křížek';
  }

  playerInfo.textContent = 'Hraje: ' + symbolP;
};

buttons.forEach((button) => {
  button.addEventListener('click', addSymbol);

  updatePlayerInfo();
});
