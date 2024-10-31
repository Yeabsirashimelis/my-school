import connectDB from "@/config/database";
import Student from "@/models/student";

// Add this function to pre-generate paths
export async function generateStaticParams() {
  await connectDB();
  const students = await Student.find({});
  return students.map((student) => ({
    id: student._id.toString(),
  }));
}

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
