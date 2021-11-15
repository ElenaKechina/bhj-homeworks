const loader = document.getElementById('loader');
const items = document.getElementById('items');
const url = 'https://netology-slow-rest.herokuapp.com';
const dataValute = JSON.parse(localStorage.getItem('dataValute')) || {};

const response = (data) => {
  items.innerHTML = Object.keys(data.response.Valute)
    .map(
      (key) => `
			<div class="item">
				<div class="item__code">
    			${data.response.Valute[key].CharCode}
				</div>
				<div class="item__value">
					${data.response.Valute[key].Value}
				</div>
				<div class="item__currency">
    			руб.
				</div>
			</div>
		`
    )
    .join(' ');
  loader.classList.remove('loader_active');
};

loader.classList.add('loader_active');

if (Object.keys(dataValute).length !== 0) {
  console.log(dataValute);
  response(dataValute);
}

requestHTTP(url, response).then((data) => {
  localStorage.setItem('dataValute', JSON.stringify(data));
});
