const { Router } = require('express');
const CrawlerController = require('./app/controllers/CrawlerController');

const routes = new Router();

routes.post('/booking/:CheckIn/:CheckOut', CrawlerController.store);

module.exports = routes;
