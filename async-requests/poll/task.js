const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
const url = 'https://netology-slow-rest.herokuapp.com/poll.php';
const postBody = {};

const response = ({ id, data }) => {
  title.textContent = data.title;

  answers.innerHTML = data.answers
    .map(
      (answer, index) => `
	<button class="poll__answer" data-id="${index}">
	${answer}
</button> `
    )
    .join(' ');
  postBody.id = id;
};

requestHTTP(url, response);

const responsePost = (data) => {
  const sumVotes = data.stat.reduce((acc, elem) => acc + elem.votes, 0);
  answers.innerHTML = data.stat
    .map(
      (elem) => `
	<div>${elem.answer}: <b>${((100 * elem.votes) / sumVotes).toFixed(
        2
      )}%</b></div>`
    )
    .join(' ');
};

const modalFuncOk = () => {
  const headers = { 'Content-type': 'application/x-www-form-urlencoded' };
  const body = `vote=${postBody.id}&answer=${postBody.answerIndex}`;

  requestHTTP(url, responsePost, 'POST', body, headers);
  modal.hidden();
};

const modal = new Modal(modalFuncOk, 600, 150, 'white', '#27abeb');

const answerClick = (event) => {
  const target = event.target.closest('.poll__answer');
  if (!target) {
    return;
  }
  postBody.answerIndex = target.dataset.id;
  modal.setText(target.textContent);
  modal.themeColor = '#23f788';
  modal.show();
};

answers.addEventListener('click', answerClick);
