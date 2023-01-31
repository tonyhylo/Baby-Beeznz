const Baby = require('../models/baby');

function newBaby(req, res) {
  res.render("babies/new");
}

function create(req, res) {
  const baby = new Baby(req.body);
  baby.save(function(err) {
    if (err) return res.render('babies/new');
    console.log(baby);
    Baby.find({}, function(err, baby) {
      res.render('babies/index', {title: "Baby Beeznz", baby});
    });
  });
}

function index(req, res) {
  Baby.find({}, function(err, baby) {
    res.render('babies/index', {title: "Baby Beeznz", baby});
  });
};

function show(req, res) {
  Baby.findById(req.params.id, function(err, baby) {
      res.render('babies/show', {title: 'Baby Beeznz', baby});
  })
}

module.exports = {
  new: newBaby,
  create,
  index,
  show
};
