const timePrint = document.getElementById('timer');
const modal = document.querySelector('.modal');

document.getElementById('status').style.width = '450px'; // что бы время на следующую строчку не перепрыгивало

let timeCount = +timePrint.textContent;

const timeFormat = (timeInSeconds) => {
  const time = {};
  time.hours = Math.floor(timeInSeconds / 3600);
  time.minutes = Math.floor((timeInSeconds - time.hours * 3600) / 60);
  time.seconds = timeInSeconds - time.hours * 3600 - time.minutes * 60;

  for (const elem in time) {
    if (time[elem] < 10) {
      time[elem] = '0' + time[elem];
    }
  }

  return time.hours + ':' + time.minutes + ':' + time.seconds;
};

const timer = setInterval(() => {
  timePrint.textContent = timeFormat(timeCount);
  timeCount--;
  if (timeCount < 0) {
    clearInterval(timer);
    modal.hidden = false;
    location.href = 'task.css.tar.gz';
  }
}, 1000);

modal.addEventListener('click', () => {
  modal.hidden = true;
});
