import Gallery from "@/models/gallery";
import cloudinary from "@/config/cloudinary";
import connectDB from "@/config/database";

export const POST = async function (request) {
  try {
    await connectDB();
    const formData = await request.formData();
    const images = formData.getAll("images");

    // Validate if images is an array
    if (!Array.isArray(images)) {
      throw new Error("Images not found");
    }

    // UPLOAD THE IMAGES TO CLOUDINARY
    const imageUploadPromises = images.map(async (image) => {
      const imageBuffer = await image.arrayBuffer();
      const imageArray = Array.from(new Uint8Array(imageBuffer));
      const imageData = Buffer.from(imageArray);
      const imageBase64 = imageData.toString("base64");

      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBase64}`,
        { folder: "myschool" }
      );

      return result.secure_url;
    });

    // Wait for all the images to upload
    const uploadedImages = await Promise.all(imageUploadPromises);

    // Create a new Gallery instance with the images
    const newGallery = new Gallery({ images: uploadedImages });
    await newGallery.save(); // Save the document to the database

    return new Response(JSON.stringify({ _id: newGallery._id }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
