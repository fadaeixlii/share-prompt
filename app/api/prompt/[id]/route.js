import Prompts from "@/models/prompt";
import { connectToDb } from "@/utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDb();
    const prompt = await Prompts.findById(params.id).populate("creator");
    console.log(prompt);
    if (!prompt)
      return new Response("prompt not found!", {
        status: 404,
      });

    return new Response(
      JSON.stringify(prompt, {
        status: 200,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response("Failed to get prompt", {
      status: 500,
    });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDb();
    const existPrompt = await Prompts.findById(params.id);
    if (!existPrompt) return new Response("Prompt not found", { status: 404 });

    existPrompt.prompt = prompt;
    existPrompt.tag = tag;

    await existPrompt.save();

    return new Response(JSON.stringify(existPrompt), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get prompt", {
      status: 500,
    });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    await connectToDb();
    await Prompts.findByIdAndDelete(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get prompt", {
      status: 500,
    });
  }
};
