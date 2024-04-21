import Prompts from "@/models/prompt";
import { connectToDb } from "@/utils/database";

export const GET = async (req) => {
  try {
    const search = req.nextUrl.searchParams.get("searchValue");
    await connectToDb();
    const promptList = await Prompts.find({});
    console.log(promptList);
    console.log(req.query);

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
