var API_KEY = 1234;
var express = require('express')
var router = express.Router();
const { poolPromise, sql } = require('../db')

router.get('/', function (req, res) {
    res.send("API running")
});
module.exports = router;