const Baby = require('../models/baby');
 
module.exports = {
  create
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
 