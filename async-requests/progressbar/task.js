const progress = document.getElementById('progress');
const file = document.getElementById('file');
const send = document.getElementById('send');

const upload = (file) => {
  let xhr = new XMLHttpRequest();

  xhr.upload.onprogress = function (event) {
    progress.value = event.loaded / event.total;
  };

  xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  xhr.send(file);
};

send.addEventListener('click', (event) => {
  event.preventDefault();
  upload(file.files[0]);
});
