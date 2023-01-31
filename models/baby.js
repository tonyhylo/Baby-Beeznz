const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedSchema = new Schema( {
    date: {type: Date},
    quantity: {type: Number, min: 0},
    duration: {type: Number, min: 0}
})

const babySchema = new Schema( {
    name: {type:String},
    dob: {type: Date},
    feeds: [feedSchema],
})

module.exports = mongoose.model('Baby', babySchema);