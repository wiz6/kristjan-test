var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var VerifyToken = require('./../auth/VerifyToken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.post('/confirm', VerifyToken, function(req, res, next) {
    res.status(200).send({
        success: true
    });
});

module.exports = router;