const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');
let activeTab = 0;

const clickTab = (event) => {
  tabs[activeTab].classList.remove('tab_active');
  contents[activeTab].classList.remove('tab__content_active');

  event.currentTarget.classList.add('tab_active');
  activeTab = [...tabs].findIndex((tab) =>
    tab.classList.contains('tab_active')
  );
  contents[activeTab].classList.add('tab__content_active');
};

Array.from(tabs).forEach((tab) => tab.addEventListener('click', clickTab));
