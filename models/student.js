import { Schema, model, models } from "mongoose";

const StudentSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    score: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Student = models.Student || model("Student", StudentSchema);

export default Student;
