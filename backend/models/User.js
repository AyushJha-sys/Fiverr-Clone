import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  isSeller: Boolean
}, { timestamps: true });

export default mongoose.model("User", UserSchema);