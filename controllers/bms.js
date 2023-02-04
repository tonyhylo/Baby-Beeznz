const Baby = require('../models/baby');
 
module.exports = {
  create,
  delete: deleteBm
};

function create(req, res) {
    Baby.findById(req.params.id, function(err, baby) {
      console.log(1, req.body, req.body.bm);
        baby.bms.push(req.body);
        baby.save(function(err) {
        res.redirect(`/babies/${baby._id}`);
      });
    });
  }

  function deleteBm(req, res) {
    console.log(req.params.id)
    Baby.findOne({
      'bms._id': req.params.id
    })
    .then((baby) => {
      baby.bms.remove(req.params.id);
      baby.save().then(() => res.redirect(`/babies/${baby._id}`))
    })
  }
 