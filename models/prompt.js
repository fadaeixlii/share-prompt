import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
  prompt: {
    type: String,
    required: [true, "prompt required! "],
  },
  tag: {
    type: String,
    required: [true, "tag required! "],
  },
});
const Prompts = models.Prompts || model("Prompts", PromptSchema);

export default Prompts;
