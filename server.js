const express = require('express');
const compression = require('compression');

process.on('uncaughtException', console.error);

const app = express();
app.use(compression());

app.use(express.static(__dirname + '/'));

const port = 3011;
app.listen();

console.log("Serwer running on port " + port);