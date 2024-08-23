import connectDB from "@/config/database";
import News from "@/models/news";
import { LocaleRouteNormalizer } from "next/dist/server/future/normalizers/locale-route-normalizer";

//GET /news-and-events/news/[id]
export const GET = async function (request, { params }) {
  try {
    await connectDB();
    const news = await News.findById(params.id);
    if (!news) {
      return new Response("Event not found", { status: 404 });
    }

    return new Response(JSON.stringify(news), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};

//DELETE /news-and-events/news/[id]
export const DELETE = async function (request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const news = await News.findById(id);

    if (!news) return new Response("News not found", { status: 404 });

    await news.deleteOne();
    return new Response("news deleted", { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

export const PUT = async function (request, { params }) {
  try {
    await connectDB();
    const formData = await request.formData();
    const { id } = params;

    const existingNews = await News.findById(id);
    if (!existingNews) {
      return new Response("news does not exist", { status: 404 });
    }

    const newsData = {
      title: formData.get("title"),
      description: formData.get("description"),
      content: formData.get("content"),
      author: formData.get("author"),
    };
    const updatedNews = await News.findByIdAndUpdate(id, newsData);
    return new Response(JSON.stringify(updatedNews), { status: 200 });
  } catch (error) {
    return new Response("Failed to update event", { status: 500 });
  }
};
