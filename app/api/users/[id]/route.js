import Prompts from "@/models/prompt";
import Users from "@/models/user";
import { connectToDb } from "@/utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDb();

    const user = await Users.findById(params?.id);
    console.log(user);

    return new Response(
      JSON.stringify(user, {
        status: 200,
      })
    );
  } catch (error) {
    console.log(error);
    return new Response("Failed get user", {
      status: 500,
    });
  }
};
