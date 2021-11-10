const card = document.querySelector('.card');
card.classList.contains;
card.addEventListener('change', (event) => {
  const { target } = event;

  const childrenCheckbox = target
    .closest('.interest')
    .querySelectorAll('.interest__check');

  [...childrenCheckbox].forEach((checkbox) => {
    checkbox.checked = target.checked;
  });
  indeterminate(target);
});

const indeterminate = (elem) => {
  const element = elem.closest('.interest');
  const elementParent = element.parentElement.closest('.interest');

  if (!elementParent) {
    return;
  }

  const parentCheckbox = elementParent.querySelector('.interest__check');

  const childrenElements = elementParent.querySelectorAll('.interest__check');
  let countChildrenChecked = 0;

  [...childrenElements].forEach((elem) => {
    if (elem.checked) {
      countChildrenChecked++;
    }
  });

  if (countChildrenChecked === 0) {
    parentCheckbox.checked = false;
    parentCheckbox.indeterminate = false;
  } else if (countChildrenChecked >= childrenElements.length - 1) {
    parentCheckbox.checked = true;
    parentCheckbox.indeterminate = false;
  } else {
    parentCheckbox.indeterminate = true;
  }

  indeterminate(elementParent);
};
