const click = (event) => {
  const target = event.target.closest('.has-tooltip');
  if (!target) {
    return;
  }
  const removeTooltip = document.querySelector('.tooltip');
  removeTooltip.remove();

  event.preventDefault();

  const tooltip = document.createElement('div');
  tooltip.textContent = target.title;
  tooltip.className = 'tooltip tooltip_active';
  tooltip.style.position = 'absolute';
  document.body.append(tooltip);

  tooltip.style.top =
    target.getBoundingClientRect().bottom + window.pageYOffset + 'px';
  tooltip.style.left = target.getBoundingClientRect().left + 'px';
};

document.body.addEventListener('click', click);
