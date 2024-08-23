import connectDB from "@/config/database";
import Event from "@/models/event";

//GET /news-and-events/events/[id]
export const GET = async function (request, { params }) {
  try {
    await connectDB();
    const event = await Event.findById(params.id);
    if (!event) {
      return new Response("Event not found", { status: 404 });
    }

    return new Response(JSON.stringify(event), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong", { status: 500 });
  }
};

//DELETE /news-and-events/events/[id]
export const DELETE = async function (request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const event = await Event.findById(id);

    if (!event) return new Response("Event not found", { status: 404 });

    await event.deleteOne();
    return new Response("event deleted", { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
};

export const PUT = async function (request, { params }) {
  try {
    await connectDB();
    const formData = await request.formData();
    const { id } = params;

    const existingEvent = await Event.findById(id);
    if (!existingEvent) {
      return new Response("event does not exist", { status: 404 });
    }

    const eventData = {
      title: formData.get("title"),
      description: formData.get("description"),
      content: formData.get("content"),
      author: formData.get("author"),
    };
    const updatedEvent = await Event.findByIdAndUpdate(id, eventData);
    return new Response(JSON.stringify(updatedEvent), { status: 200 });
  } catch (error) {
    return new Response("Failed to update event", { status: 500 });
  }
};
