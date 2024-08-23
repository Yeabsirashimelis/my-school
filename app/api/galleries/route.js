import Gallery from "@/models/gallery";
import connectDB from "@/config/database";

// GET /api/galleries
export const GET = async function name(request) {
  try {
    await connectDB();
    const galleries = await Gallery.find({});

    return new Response(JSON.stringify(galleries), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something went wrong", { status: 500 });
  }
};
