class Modal {
  #modal;
  #width;
  #height;
  #color;
  #funcOk;
  #buttonOk;
  #themeColor;
  #background;
  #type;
  #modalWindow;
  constructor(
    funcOk,
    width = 100,
    height = 50,
    color = 'black',
    background = '#cccccc',
    themeColor = 'red',
    type = 'info'
  ) {
    this.#funcOk = funcOk;
    this.#width = width;
    this.#height = height;
    this.#color = color;
    this.#background = background;
    this.#themeColor = themeColor;
    this.#type = type;

    this.createModal();

    this.#buttonOk = this.#modal.querySelector('.modal-button');
    this.#modalWindow = this.#modal.querySelector('.modal__window');
    this.#buttonOk.addEventListener('click', () => {
      this.#funcOk();
    });
  }

  createModal() {
    this.#modal = document.createElement('div');

    this.#modal.innerHTML = `
		<div class="modal__window" style="
		width:${this.#width}px;
		 height:${this.#height}px;
			color:${this.#color};
				background-color:${this.#background}">
			<div class="modal__text" >Загрузка файла</div>
			<button class="modal-button" style="background-color:${
        this.#themeColor
      }">Ok</button>
		`;
    this.#modal.classList.add('modal');
    this.#modal.hidden = true;
    document.body.append(this.#modal);
  }
  set width(width) {
    this.#width = width;
    this.#modalWindow.style.width = width + 'px';
  }
  set height(height) {
    this.#height = height;
    this.#modalWindow.style.height = height + 'px';
  }
  set color(color) {
    this.#color = color;
    this.#modalWindow.style.color = color;
  }
  set background(background) {
    this.#background = background;
    this.#modalWindow.style.backgroundColor = background;
  }
  set themeColor(color) {
    this.#themeColor = color;
    this.#buttonOk.style.backgroundColor = color;
  }
  setText(text) {
    const modalText = this.#modal.querySelector('.modal__text');
    modalText.textContent = text;
  }
  show() {
    console.log('show');
    this.#modal.hidden = false;
  }
  hidden() {
    this.#modal.hidden = true;
  }
}
