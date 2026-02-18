import mongoose from "mongoose";

const gigSchema = new mongoose.Schema({

  title: String,
  desc: String,
  price: Number,
  image: String,
  userId: String

});

export default mongoose.model("Gig", gigSchema);