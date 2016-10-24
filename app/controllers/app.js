import ResultListView from '../views/app';

export default class AppController {
  constructor(appElement, apiKey) {
    this.appElement = appElement;
    this.apiKey = apiKey;
    // console.log(apiKey);
    this.model = [];
  }


  start() {
    fetch(`http://tiy-brewery-proxy.herokuapp.com/v2/breweries?key=${this.apiKey}&established=2015`)
        .then((res) => res.json())
        .then((data) => {
          this.model = data;

          // const resultView = new ResultListView(this.appElement.querySelector('.results-grid__item'), this.model);
          // resultView.render();
        });
  }
}
