const products = document.querySelector('.products');
const cartStorage = JSON.parse(localStorage.getItem('cartStorage')) || {};
const cartProducts = document.querySelector('.cart__products');
const cart = document.querySelector('.cart');

const renderCart = (id = -1) => {
  if (Object.keys(cartStorage).length === 0) {
    cart.hidden = true;
    cartProducts.innerHTML = '';
    return;
  }

  const cartProduct = cartProducts.querySelector(`[data-id="${id}"]`);

  if (cartProduct) {
    const product = products
      .querySelector(`[data-id="${id}"]`)
      .querySelector('.product__image');
    const moveProduct = product.cloneNode(true);

    moveProduct.style.opacity = '0.7';
    moveProduct.style.position = 'fixed';
    document.body.append(moveProduct);
    moveProduct.style.left = product.getBoundingClientRect().x + 'px';
    moveProduct.style.top = product.getBoundingClientRect().y + 'px';

    const coordX =
      moveProduct.getBoundingClientRect().x -
      cartProduct.querySelector('img').getBoundingClientRect().x;

    const coordY =
      moveProduct.getBoundingClientRect().y -
      cartProduct.querySelector('img').getBoundingClientRect().y;

    moveProduct.style.transform = `translate(${-coordX}px,${-coordY}px)`;

    setTimeout(() => {
      moveProduct.remove();
    }, 700);
  }

  cart.hidden = false;
  cartProducts.innerHTML = '';
  const cards = Object.keys(cartStorage).map((key) => {
    const card = document.createElement('div');
    card.classList.add('cart__product');
    card.dataset.id = key;

    const imgSrc = products
      .querySelector(`[data-id="${key}"]`)
      .querySelector('.product__image').src;

    card.innerHTML += `
		<img class="cart__product-image" src="${imgSrc}">
		<div class="cart__product-count">${cartStorage[key]}</div>
    <div class="cart__product-delete"></div>`;
    return card;
  });

  cartProducts.append(...cards);
};

renderCart();

const click = (event) => {
  const { target } = event;

  if (target.closest('.product__quantity-control_dec')) {
    dec(target.closest('.product'));
    return;
  }

  if (target.closest('.product__quantity-control_inc')) {
    inc(target.closest('.product'));
    return;
  }

  if (target.closest('.product__add')) {
    addToCart(target.closest('.product'));
    return;
  }
};

const dec = (product) => {
  const value = product.querySelector('.product__quantity-value');
  value.textContent = Number(value.textContent) - 1 || 1;
};

const inc = (product) => {
  const value = product.querySelector('.product__quantity-value');
  value.textContent = Number(value.textContent) + 1;
};

const addToCart = (product) => {
  if (product.dataset.id in cartStorage) {
    cartStorage[product.dataset.id] += +product.querySelector(
      '.product__quantity-value'
    ).textContent;
  } else {
    cartStorage[product.dataset.id] = +product.querySelector(
      '.product__quantity-value'
    ).textContent;
  }

  localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
  renderCart(product.dataset.id);
};

const removeCartElement = (event) => {
  const target = event.target.closest('.cart__product-delete');

  if (!target) {
    return;
  }

  const card = target.closest('.cart__product');
  delete cartStorage[card.dataset.id];

  localStorage.setItem('cartStorage', JSON.stringify(cartStorage));
  renderCart();
};

cartProducts.addEventListener('click', removeCartElement);

products.addEventListener('click', click);
