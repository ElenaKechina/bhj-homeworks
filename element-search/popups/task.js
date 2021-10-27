const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const button = modalMain.querySelector('.btn');
const closeButtons = document.querySelectorAll('.modal__close_times');

modalMain.classList.add('modal_active');
modalSuccess.classList.remove('modal_active');

const modalBtnClick = function (event) {
  event.preventDefault();
  modalMain.classList.toggle('modal_active');
  modalSuccess.classList.toggle('modal_active');
};

button.addEventListener('click', modalBtnClick);

for (const closeButton of closeButtons) {
  closeButton.addEventListener('click', function (event) {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
  });
}
