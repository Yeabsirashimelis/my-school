import { Schema, model, models } from "mongoose";

const GallerySchema = new Schema({
  images: [
    {
      type: String,
    },
  ],
});

const Gallery = models.Gallery || model("Gallery", GallerySchema);

export default Gallery;
