var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', express.static('template/public'));

module.exports = router;
