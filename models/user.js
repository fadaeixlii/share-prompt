import { Schema, model, models } from "mongoose";

const UsersSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exist ! "],
    required: [true, "Email required! "],
  },
  image: {
    type: String,
  },
  username: {
    type: String,
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
    required: [true, "Email required! "],
  },
});

const Users = models.Users || model("Users", UsersSchema);

export default Users;
