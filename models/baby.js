const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedSchema = new Schema({
  date: { type: Date, required: true },
  quantity: { type: Number, required: true, min: 0 },
  duration: { type: Number, min: 0 },
});

const bmSchema = new Schema({
  date: { type: Date, required: true },
  bm: { type: String, required: true, enum: ["Wet", "Mix"] },
});

const babySchema = new Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  feeds: [feedSchema],
  bms: [bmSchema]
});

module.exports = mongoose.model("Baby", babySchema);
