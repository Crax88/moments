const { Schema, Model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 5,
    },
    body: {
      type: String,
      required: true,
      minLength: 5,
    },
    tags: {
      type: [String],
      default: [],
    },
    likes: {
      type: [String],
      default: [],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Post", PostSchema);
