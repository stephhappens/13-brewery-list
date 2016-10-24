export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.model.forEach((result) => {
      const row = document.createElement('div');
      row.classList.add('result');

      row.innerHTML = `
      <img class="result__logo" src="">
      <h2 class="result__name"></h2>
      <p class="result__year"></p>`;

      row.querySelector('.result__logo').innerText = result.images.icon;
      row.querySelector('.result__name').innerText = result.name;
      row.querySelector('.result__year').innerText = result.established;

      this.el.appendChild(row);
    });
  }
}
