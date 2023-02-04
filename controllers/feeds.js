const Baby = require('../models/baby');
 
module.exports = {
  create,
  delete: deleteFeed
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
 