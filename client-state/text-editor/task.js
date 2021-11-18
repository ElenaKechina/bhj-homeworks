const text = localStorage.getItem('text') || '';
const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear');

editor.value = text;

editor.addEventListener('input', () => {
  localStorage.setItem('text', editor.value);
});

clearBtn.addEventListener('click', () => {
  localStorage.removeItem('text');
  editor.value = '';
});
