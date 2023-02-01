const express = require('express');
const router = express.Router();
const feedsCtrl = require('../controllers/feeds');

router.post('/babies/:id/feeds', feedsCtrl.create);

module.exports = router;
