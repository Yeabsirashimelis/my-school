import { Schema, model, models } from "mongoose";

const EventSchema = new Schema(
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

const Event = models.Event || model("Event", EventSchema);

export default Event;
