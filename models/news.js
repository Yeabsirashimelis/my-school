import { Schema, model, models } from "mongoose";

const NewsSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const News = models.News || model("News", NewsSchema);

export default News;
