class Game {
  #win;
  #loss;
  #container;
  #data;
  #countWin = 0;
  #countLoss = 0;
  #curentSymbol = 0;
  #symbols;
  #winElement;
  #lossElement;
  #timeElement;
  #isLoss;
  #timerId;
  #eventListener = (event) => {
    this.registerEvents(event);
  };
  constructor(
    container,
    win,
    loss,
    data,
    winElement,
    lossElement,
    timeElement
  ) {
    this.#container = container;
    this.#win = win;
    this.#loss = loss;
    this.#data = data;
    this.#winElement = winElement;
    this.#lossElement = lossElement;
    this.#timeElement = timeElement;
    this.startGame();
  }
  startGame() {
    this.nextWord();
    this.#countWin = 0;
    this.#countLoss = 0;

    this.#lossElement.textContent = 0;
    this.#winElement.textContent = 0;

    document.body.addEventListener('keydown', this.#eventListener);
  }

  newWord() {
    this.#isLoss = false;
    const index = Math.floor(Math.random() * this.#data.length);
    const word = this.#data[index];
    let wordOut = '<div class="word">';

    [...word].forEach((symbol) => {
      wordOut += `<span class="symbol">${symbol}</span>`;
    });
    wordOut += '</div>';

    return wordOut;
  }

  nextWord() {
    this.#container.innerHTML = this.newWord();
    this.#curentSymbol = 0;
    this.#symbols = this.#container.querySelectorAll('.symbol');
    this.timeInput();
  }

  registerEvents(event) {
    if (
      (event.keyCode < 48 && event.keyCode !== 32) ||
      (event.keyCode > 57 && event.keyCode < 65) ||
      (event.keyCode > 90 && event.keyCode < 186) ||
      (event.keyCode > 192 && event.keyCode < 219) ||
      event.keyCode > 222
    ) {
      return;
    }

    if (
      event.key.toLowerCase() ===
      this.#symbols[this.#curentSymbol].textContent.toLowerCase()
    ) {
      if (event.key === ' ') {
        this.#symbols[this.#curentSymbol].classList.add('symbol_correct-space');
      } else {
        this.#symbols[this.#curentSymbol].classList.add('symbol_correct');
      }
    } else {
      this.#isLoss = true;
      if (event.key === ' ') {
        this.#symbols[this.#curentSymbol].classList.add(
          'symbol_incorrect-space'
        );
      } else {
        this.#symbols[this.#curentSymbol].classList.add('symbol_incorrect');
      }
    }
    this.#curentSymbol++;

    if (this.#curentSymbol === this.#symbols.length) {
      this.wordEnd(this.#isLoss);
    }
  }

  wordEnd(isLoss) {
    clearInterval(this.#timerId);
    this.#timeElement.textContent = 0;

    if (isLoss) {
      this.#countLoss++;
      this.#lossElement.textContent = this.#countLoss;
    } else {
      this.#countWin++;
      this.#winElement.textContent = this.#countWin;
    }

    if (this.#countWin >= 10) {
      this.#win();
      document.body.removeEventListener('keydown', this.#eventListener);
      return;
    }

    if (this.#countLoss >= 5) {
      this.#loss();
      document.body.removeEventListener('keydown', this.#eventListener);
      return;
    }

    this.nextWord();
  }

  timeInput() {
    let time = this.#symbols.length;
    this.#timeElement.textContent = time;

    const timeValueColor = () => {
      if (time > this.#symbols.length - this.#curentSymbol) {
        this.#timeElement.classList.add('symbol_correct');
        this.#timeElement.classList.remove('symbol_incorrect');
      } else if (time === this.#symbols.length - this.#curentSymbol) {
        this.#timeElement.classList.remove('symbol_correct');
        this.#timeElement.classList.remove('symbol_incorrect');
      } else {
        this.#timeElement.classList.remove('symbol_correct');
        this.#timeElement.classList.add('symbol_incorrect');
      }
    };

    this.#timerId = setInterval(() => {
      time--;
      this.#timeElement.textContent = time;
      timeValueColor();
      if (time <= 0) {
        this.wordEnd(true);
      }
    }, 1000);
  }
}
