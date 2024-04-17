import Prompts from "@/models/prompt";
import { connectToDb } from "@/utils/database";

export const GET = async (req) => {
  try {
    const { page = 1, pageSize = 10 } = req.query;
    const pageNumber = parseInt(page);
    const limit = parseInt(pageSize);
    const skip = (pageNumber - 1) * limit;
    await connectToDb();
    const promptList = await Prompts.find({}).skip(skip).limit(limit);
    console.log(promptList);

    return new Response(
      JSON.stringify(promptList, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      })
    );
  } catch (error) {
    console.log(error);
    return new Response("Failed get all prompts", {
      status: 500,
    });
  }
};
