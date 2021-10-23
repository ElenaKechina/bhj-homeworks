const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');
let prevDateClick = new Date();

cookieClick = () => {
  const dateClick = new Date();
  cookie.classList.toggle('clicker__cookie__scaleUp');
  clickerCounter.textContent = +clickerCounter.textContent + 1;
  const clickSpeed = 1 / ((dateClick - prevDateClick) / 1000);
  clickerSpeed.textContent = clickSpeed.toFixed(2) + ' click/sec';
  prevDateClick = dateClick;
};

cookie.addEventListener('click', cookieClick);
