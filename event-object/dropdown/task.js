const dropdowns = document.querySelectorAll('.dropdown');

const click = (event) => {
  const { target } = event;
  const dropdown = target.closest('.dropdown');

  if (target.closest('.dropdown__item')) {
    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownLink = target.querySelector('.dropdown__link') || target;
    const dropdownList = target.closest('.dropdown__list');

    event.preventDefault();
    dropdownValue.textContent = dropdownLink.textContent;
    dropdownList.classList.remove('dropdown__list_active');
  } else if (target.closest('.dropdown')) {
    const dropdownList = dropdown.querySelector('.dropdown__list');
    dropdownList.classList.toggle('dropdown__list_active');
  }
};

Array.from(dropdowns).forEach((button) =>
  button.addEventListener('click', click)
);
