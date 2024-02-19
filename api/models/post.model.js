import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://cdn.create.vista.com/api/media/small/243398462/stock-photo-isometric-concept-creative-writing-blogging-education-content-management-web-page",
    },
    category: {
      type: String,
      required: true,
      default: "uncategorized",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { tiimestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;