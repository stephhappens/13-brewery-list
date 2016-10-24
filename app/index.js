import 'whatwg-fetch';
import ResultListView from '.views/app';
import AppController from '.controllers/app';
const apiKey = process.env.API_KEY;

const el = document.querySelector('.app');
const application = new AppController(el);

application.start();
