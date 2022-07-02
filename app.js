'use strict';

const PORT = 3000;

const { request } = require('express')
var express = require('express')
var bodyParse = require("body-parser")
var app = express();
var routes = require('./routes/index.html')

var publicDir = (__dirname + '/public')

app.use(express.static(publicDir));
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => { console.log("API running") });