const express = require('express');
const router = express.Router();
const feedsCtrl = require('../controllers/feeds');

router.post('/babies/:id/feeds', feedsCtrl.create);
router.delete('/feeds/:id', feedsCtrl.delete);
router.put('/:id', feedsCtrl.update);

module.exports = router;
