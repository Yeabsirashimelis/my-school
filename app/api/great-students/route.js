import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";
import Student from "@/models/student";

// GET /api/great-students
export const GET = async function name(request) {
  try {
    await connectDB();
    const students = await Student.find({});

    return new Response(JSON.stringify(students), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

//POST api/add-student
export const POST = async function (request) {
  try {
    await connectDB();
    const formData = await request.formData();

    const image = formData.get("image");
    const student = {
      name: formData.get("name"),
      description: formData.get("description"),
      score: formData.get("score"),
      image,
    };
    console.log(student);

    // // UPLOAD THE IMAGES TO CLOUDINARY
    const imageUploadPromise = async (image) => {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);
      const imageBase64 = imageData.toString("base64");

      //   // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        { folder: "myschool" }
      );

      return result.secure_url;
    };

    // Wait for all the images to upload
    const uploadedImage = await imageUploadPromise(image);
    student.image = uploadedImage;

    console.log(image);

    //Add student to database
    const newStudent = new Student(student);
    await newStudent.save(); // Save the document to the database

    return new Response({ message: "success" }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// DELETE /api/great-students
export const DELETE = async function (request) {
  try {
    await connectDB();

    // Delete all students
    await Student.deleteMany({});

    return new Response("All students deleted", { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};
