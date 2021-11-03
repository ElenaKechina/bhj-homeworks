const bookControls = document.querySelectorAll('.book__control');
const book = document.getElementById('book');

const className = () => {
  let className = 'book';
  [...bookControls].forEach((bookControl) => {
    if (bookControl.classList.contains('book__control_font-size')) {
      const target = bookControl.querySelector('.font-size_active');
      if (target.dataset.size) {
        className += ` book_fs-${target.dataset.size}`;
      }
    } else if (bookControl.classList.contains('book__control_color')) {
      const target = bookControl.querySelector('.color_active');
      className += ` book_color-${target.dataset.textColor}`;
    } else if (bookControl.classList.contains('book__control_background')) {
      const target = bookControl.querySelector('.color_active');
      className += ` book_bg-${target.dataset.bgColor}`;
    }
  });
  return className;
};

const click = function (event) {
  const { target } = event;
  event.preventDefault();

  if (this.classList.contains('book__control_font-size')) {
    const fontSizeLinks = this.querySelectorAll('.font-size');
    [...fontSizeLinks].forEach((elem) =>
      elem.classList.remove('font-size_active')
    );
    target.classList.add('font-size_active');
  } else if (this.classList.contains('book__control')) {
    const colorControlLinks = this.querySelectorAll('.color');
    [...colorControlLinks].forEach((elem) =>
      elem.classList.remove('color_active')
    );
    target.classList.add('color_active');
  }

  book.className = className();
};
[...bookControls].forEach((bookControl) =>
  bookControl.addEventListener('click', click)
);
