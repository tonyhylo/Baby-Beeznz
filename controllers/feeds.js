const { findOne } = require('../models/baby');
const Baby = require('../models/baby');
 
module.exports = {
  create,
  delete: deleteFeed,
  update,
  edit,
};

function create(req, res) {
    Baby.findById(req.params.id, function(err, baby) {
      console.log(1, req.body);
        baby.feeds.push(req.body);
        baby.save(function(err) {
        res.redirect(`/babies/${baby._id}`);
      });
    });
  }

function deleteFeed(req, res) {
  console.log(req.params.id)
  Baby.findOne({
    'feeds._id': req.params.id
  })
  .then((baby) => {
    baby.feeds.remove(req.params.id);
    baby.save().then(() => res.redirect(`/babies/${baby._id}`))
  })
}
 
function update(req, res) {
  console.log("entered controller");
  console.log(req.body);
  // The model is responsible for creating data
  Baby.update(req.body, Number(req.params.id));
  // Do a redirect anytime data is changed
  // res.redirect(`/babies/${req.params.id}`, {title: "Baby Beeznz", baby});
  res.render(`babies/updateFeed`, {title: "Baby Beeznz"});
}

function edit(req, res) {
  // Baby.findById(req.params.id, function(err, baby) {
  //     res.render(`babies/edit`, {title: 'Baby Beeznz', "baby": Baby.findOne(req.params.id)});
  //   });
  // };
  res.json({requestBody: req.body})
};

//   Baby.findById(req.params.id, function(err, baby) {
//     res.render('babies/show', {title: 'Baby Beeznz', baby});
// })
  // res.render("babies/edit", {
  //   baby: Baby.findOne(req.params.id),
  // });
