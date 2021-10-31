const modalFuncOk = () => {
  modal.hidden();
  game.startGame();
};

const winFunc = () => {
  modal.setText('Поздравляем! Вы победили!');
  modal.themeColor = '#23f788';
  modal.show();
};

const lossFunc = () => {
  modal.setText('Увы :-( Вы проиграли :-(');
  modal.themeColor = '#e3394b';
  modal.show();
};
const modal = new Modal(modalFuncOk, 600, 150, 'white', '#27abeb');

const gameConhtainer = document.querySelector('.game');
const winElement = document.querySelector('.status__wins');
const lossElement = document.querySelector('.status__loss');
const timeElement = document.querySelector('.time__value');

const game = new Game(
  gameConhtainer,
  winFunc,
  lossFunc,
  dataBase,
  winElement,
  lossElement,
  timeElement
);
