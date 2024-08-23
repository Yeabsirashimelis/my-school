import connectDB from "@/config/database";
import Event from "@/models/event";
import cloudinary from "@/config/cloudinary";

//GET /api/news-and-events/events

export const GET = async function (request) {
  try {
    await connectDB();
    const events = await Event.find({});
    return new Response(JSON.stringify(events), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// POST/api/news-and_events/events
export const POST = async function (request) {
  try {
    await connectDB();
    const formData = await request.formData();
    const images = formData.getAll("images");

    const eventData = {
      title: formData.get("title"),
      description: formData.get("description"),
      content: formData.get("content"),
      author: formData.get("author"),
    };

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
    eventData.images = uploadedImages;

    const newEvent = new Event(eventData); // Create a new model with our object
    await newEvent.save(); // Then save to the database

    return new Response(JSON.stringify({ _id: newEvent._id }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("something went wrong", { status: 500 });
  }
};
