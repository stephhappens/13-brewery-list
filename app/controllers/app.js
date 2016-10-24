export default class AppController {
  constructor(appElement) {
    this.appElement = appElement;
    this.model = [];
  }


  start() {
    fetch('http://tiy-brewery-proxy.herokuapp.com/v2/breweries?key=${this.apiKey}&established=2015')
        .then((res) => res.json())
        .then((data) => {
          this.model = data;

          const resultView = new ResultListView(this.appElement.querySelector('.results-table__list'), this.model);
          resultView.render();
        });
  }
}
