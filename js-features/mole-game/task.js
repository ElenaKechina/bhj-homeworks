const deadElem = document.getElementById('dead');
const lostElem = document.getElementById('lost');
const gameBoard = document.querySelector('.hole-game');
const modal = document.querySelector('.modal');
const modalText = modal.querySelector('.modal__text');

let dead = 0;
let lost = 0;

gameBoard.addEventListener('click', function (event) {
  const target = event.target;
  if (target.classList.contains('hole_has-mole')) {
    dead++;
  } else {
    lost++;
  }
  deadElem.textContent = dead;
  lostElem.textContent = lost;

  if (dead > 9) {
    modal.hidden = false;
    modalText.textContent = 'Вы выиграли!';
  }

  if (lost > 4) {
    modal.hidden = false;
    modalText.textContent = 'Вы проиграли :-(';
  }
});

modal.addEventListener('click', function () {
  this.hidden = true;
  location.reload();
});
