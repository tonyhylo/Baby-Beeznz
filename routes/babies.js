const express = require('express');
const router = express.Router();
const babiesCtrl = require('../controllers/babies');

// GET /babies/new
router.get('/new', babiesCtrl.new);
// router.get('/', function(req, res, next) {
//     // res.render('babies/new');
//     res.send('hello');
// });

module.exports = router;