const express = require('express');
const path = require('path');
const port = process.env.PORT || 4000;
const app = express();
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var database = require('./database');
mongoose.connect(database.url);

const isDevelopment = process.argv.indexOf('--development') !== -1;

if (isDevelopment) {

  // const webpack = require('webpack');
  // const webpackConfig = require('../webpack.config');

  // const compiler = webpack(webpackConfig);
  app.use(cors({ origin: '*' }));

} else {

  // app.use(express.static(path.resolve(__dirname, '..', 'client')));
  // app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));
}

require('./routes.js')(app);
// handle every other route with index.html, which will contain
// a script tag to our application's JavaScript file(s).
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'))
});

app.listen(port);

console.log(`server started on port: ${port}`);

