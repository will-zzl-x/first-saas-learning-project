// The Post model includes title, description (optional), boardId, and userId (optional)
// The trim option is used to remove whitespace from the beginning and end of the string
// The maxlength option is used to limit the length of the string
// Hot reloading can cause multiple database connections, so we need to restart the npm run dev command
// a model for a Post document in the databse, each post has a title, description, a boardID to which it belongs, a UserID(optional) of the user who created it (if user is logged in), The boardID and userID fields are references to the Board and User mdodels, respectively.

import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    boardId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Board",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    votesCounter: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);
export default mongoose.models.Post || mongoose.model("Post", postSchema);
