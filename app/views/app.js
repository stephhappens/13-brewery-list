export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.el.innerHTML = '';

    this.model.forEach((result) => {
      const row = document.createElement('div');
      row.classList.add('result');

      row.innerHTML = `
      <div class="result__logo">
        <img src="http://lorempixel.com/output/animals-q-c-640-480-8.jpg" class="result__logo-photo" alt="puppy">
      </div>
      <div class="result__content">
        <h2 class="result__name"> I am a brewery name.</h2>
        <p class="result__year"> I was established on </p>
      </div>`;

      if (result.images) {
        row.querySelector('.result__logo-photo').src = result.images.icon;
      }

      row.querySelector('.result__name').innerText = result.name;
      row.querySelector('.result__year').innerText = result.established;

      this.el.appendChild(row);
    });
  }
}
