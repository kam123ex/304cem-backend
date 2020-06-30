const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create the User Schema
const DiarySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = Diary = mongoose.model("diaries", DiarySchema);
