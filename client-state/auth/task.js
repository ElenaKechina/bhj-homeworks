const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = localStorage.getItem('userId') || null;
const url = ' https://netology-slow-rest.herokuapp.com/auth.php';
const exitBtn = document.getElementById('exit');

const welcomeUser = (id) => {
  const user = document.getElementById('user_id');
  welcome.classList.add('welcome_active');
  user.textContent = id;
  signin.classList.remove('signin_active');
};

const modalFuncOk = () => {
  modal.hidden();
};

const modal = new Modal(modalFuncOk, 600, 150, 'white', '#27abeb');

if (userId) {
  welcomeUser(userId);
} else {
  signin.classList.add('signin_active');
}

const response = (data) => {
  if (data.success) {
    welcomeUser(data.user_id);
    localStorage.setItem('userId', data.user_id);
  } else {
    modal.setText('Не верный логин/пароль');
    modal.themeColor = '#e3394b';
    modal.show();
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  requestHTTP(url, response, 'POST', new FormData(form)).then(() => {
    form.reset();
  });
});

exitBtn.addEventListener('click', () => {
  localStorage.removeItem('userId');

  welcome.classList.remove('welcome_active');
  signin.classList.add('signin_active');
});
