const express = require('express');
require('dotenv').config();
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const router = require('./routes')
const bodyParser = require("body-parser");
app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/v1', router)




app.get('/*', function (req, res) {
  res.redirect('/');
});

app.listen(port);