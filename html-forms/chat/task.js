const chat = document.querySelector('.chat-widget');
const chatSide = document.querySelector('.chat-widget__side');
const input = document.getElementById('chat-widget__input');
const chatMessages = chat.querySelector('.chat-widget__messages');
const scrollElement = chat.querySelector('.chat-widget__messages-container');
const botMessages = [
  'Мяу',
  'Мур-мур',
  'Ути какой лапочка!',
  'Почеши мне пузико)))',
  'Гладь меня!',
  'Хочу кушать...',
  'Кусь',
];

chat.addEventListener('click', () => {
  chat.classList.add('chat-widget_active');
  botQuestionDebounce();
});

const pressKey = (event) => {
  botQuestionDebounce();
  if (event.key !== 'Enter') {
    return;
  }

  const text = input.value.trim();
  if (!text) {
    return;
  }
  input.value = '';
  chatMessages.innerHTML += `
	<div class="message message_client">
	<div class="message__time">${timeNow()}</div>
	<div class="message__text">${text}</div>
</div>`;

  const indexBotMessage = Math.floor(Math.random() * botMessages.length);

  setTimeout(() => {
    chatMessages.innerHTML += `
	<div class="message">
	<div class="message__time">${timeNow()}</div>
	<div class="message__text">${botMessages[indexBotMessage]}</div>
</div>`;
    scrollElement.scrollTop = scrollElement.scrollHeight;
  }, 700);

  scrollElement.scrollTop = scrollElement.scrollHeight;
  //scrollElement.scrollTop = Infinity;
};

const timeNow = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutes}`;
};

const botQuestion = () => {
  chatMessages.innerHTML += `
	<div class="message">
	<div class="message__time">${timeNow()}</div>
	<div class="message__text">Почему ты со мной не играешь?</div>
</div>`;
  scrollElement.scrollTop = scrollElement.scrollHeight;
};

const decoratorDebounce = (f, ms) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      f.apply(this, args);
      console.timeEnd('time');
    }, ms);
  };
};

const botQuestionDebounce = decoratorDebounce(botQuestion, 30000);

chat.addEventListener('keyup', pressKey);
