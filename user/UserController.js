var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const db = require('./../db');

router.use(bodyParser.urlencoded({ extended: true }));

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', async (req, res) => {
    const users = await db.select().from('users');
    res.status(200).send(users);
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function (req, res) {
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function (req, res) {
});

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', /* VerifyToken, */ function (req, res) {
});


module.exports = router;