const express = require('express');
const babies = require('../controllers/babies');
const router = express.Router();
const babiesCtrl = require('../controllers/babies');

// GET /babies/new
router.get('/new', babiesCtrl.new);
// POST /babies
router.post('/', babiesCtrl.create);
// GET /babies
router.get('/', babiesCtrl.index);
// GET /babies/:id
router.get('/:id', babiesCtrl.show);
// DELETE /babies/:_id
router.delete('/:id', babiesCtrl.delete);

module.exports = router;