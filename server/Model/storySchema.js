const mongoose = require("./database.js");

const { Schema } = mongoose;

const storySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  story: {
    type: String,
    required: true,
  },
});

const Story = mongoose.model("Stories", storySchema);

module.exports = Story;
