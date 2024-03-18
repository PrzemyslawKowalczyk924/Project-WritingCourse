import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  description: { type: String, require: true },
  author: { type: String, require: false },
  title: { type: String, require: false },
  genre: { type: String, require: false },
  pages: { type: Number, require: false },
  datetime: { type: Date, require: false },
  shortDescription: { type: String, require: false },
  timeOfPublication: { type: String, require: false },
  slug: { type: String, require: true },
});

const Posts = mongoose.models.Posts || mongoose.model("Posts", postSchema);
export default Posts;