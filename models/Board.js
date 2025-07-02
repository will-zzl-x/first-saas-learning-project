import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.models.Board || mongoose.model("Board", boardSchema);
