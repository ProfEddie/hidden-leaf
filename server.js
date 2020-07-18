const express = require('express');
require('dotenv').config();
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
const router = require('./routes')
const { Sequelize } = require('sequelize');
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.use('/v1', router)

let sequelize
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.POSTGRE_PRODUCTION_URL)
}
else {
  sequelize = new Sequelize(process.env.POSTGRE_LOCAL_URL)
}


async function test () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
test();

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);