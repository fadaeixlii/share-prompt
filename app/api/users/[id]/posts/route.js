import Prompts from "@/models/prompt";
import { connectToDb } from "@/utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDb();

    const promptList = await Prompts.find({
      creator: params?.id,
    }).populate("creator");
    console.log(promptList);

    return new Response(
      JSON.stringify(promptList, {
        status: 200,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response("Failed get all prompts", {
      status: 500,
    });
  }
};
