const express = require('express');
const router = express.Router();
const bmsCtrl = require('../controllers/bms');

router.post('/babies/:id/bms', bmsCtrl.create);
router.delete('/bms/:id', bmsCtrl.delete);

module.exports = router;
