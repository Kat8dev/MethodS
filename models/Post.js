const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    textTitle: {
      type: String,
      max: 500
    },
    desc: {
      type: String,
      max: 1000,
    },
    eventDate: {
      type: String,
      max: 20,
    },
    eventLocation: {
      type: String,
      max: 200,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);