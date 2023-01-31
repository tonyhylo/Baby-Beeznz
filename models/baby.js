const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const babySchema = new Schema( {
    name: {type:String},
    dob: {type: Date},
})

module.exports = mongoose.model('Baby', babySchema);