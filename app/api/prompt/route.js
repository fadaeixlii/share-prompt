import Prompts from "@/models/prompt";
import { connectToDb } from "@/utils/database";

export const GET = async (req) => {
  try {
    await connectToDb();
    const search = req.nextUrl.searchParams.get("searchValue");
    const promptList = await Prompts.find({}).populate("creator");
    console.log(search);

    return new Response(
      JSON.stringify(
        search
          ? promptList.filter((p) => p.prompt.includes(search))
          : promptList,
        {
          status: 200,
        }
      )
    );
  } catch (error) {
    console.log(error);
    return new Response("Failed get all prompts", {
      status: 500,
    });
  }
};
