const height = document.documentElement.clientHeight;
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  [...reveals].forEach((reveal) => {
    if (
      reveal.getBoundingClientRect().top > 0 &&
      reveal.getBoundingClientRect().top < height
    ) {
      reveal.classList.add('reveal_active');
    } else {
      reveal.classList.remove('reveal_active');
    }
  });
});
