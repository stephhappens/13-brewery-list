import 'whatwg-fetch';

import AppController from './controllers/app';
const apiKey = process.env.API_KEY;

const el = document.querySelector('.full-page');
const application = new AppController(el, apiKey);

application.start();
