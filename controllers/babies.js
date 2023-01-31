const Baby = require('../models/baby');

function newBaby(req, res) {
  res.render("babies/new");
}

module.exports = {
  new: newBaby,
};
