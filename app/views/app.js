export default class ResultListView {
  constructor(el, model) {
    this.el = el;
    this.model = model;
  }

  render() {
    this.model.forEach((result) => {
      const row = document.createElement('tr');
      row.classList.add('result');

      row.innerHTML = `
      <img class="result__logo"></td>
      <h2 class="result__name"></h2>
      <p class="result__year"></p>`;

      row.querySelector('.result__logo').innerText = result.time;
      row.querySelector('.result__name').innerText = result.user;
      row.querySelector('.result__year').innerText = result.bpm;

      this.el.appendChild(row);
    });
  }
}
