const rotators = document.querySelectorAll('.rotator');

const rotation = (rotator) => {
  const rotatorCase = rotator.querySelectorAll('.rotator__case');
  let index = 1;
  const indexToCicrle = (index) => {
    return index < 0 ? rotatorCase.length + index : index;
  };
  setTimeout(function tick() {
    if (index === rotatorCase.length) {
      index = 0;
    }
    rotatorCase[indexToCicrle(index - 1)].classList.remove(
      'rotator__case_active'
    );
    rotatorCase[index].classList.add('rotator__case_active');
    rotatorCase[index].style.color = rotatorCase[index].dataset.color;
    index++;
    setTimeout(tick, rotatorCase[indexToCicrle(index - 1)].dataset.speed);
  }, rotatorCase[indexToCicrle(index - 1)].dataset.speed);
};

[...rotators].forEach((rotator) => {
  rotation(rotator);
});
