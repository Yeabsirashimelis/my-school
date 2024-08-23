import connectDB from "@/config/database";
import Student from "@/models/student";

//DELETE api/great-students/[id]
export const DELETE = async function (request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const student = await Student.findById(id);

    if (!student) return new Response("student not found", { status: 404 });

    await student.deleteOne();
    return new Response("student deleted", { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
