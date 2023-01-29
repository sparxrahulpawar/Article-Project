import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const articleModel = mongoose.model("Article", articleSchema);

export default articleModel;
