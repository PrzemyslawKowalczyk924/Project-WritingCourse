import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postSchema = new Schema({
  _id: { type: ObjectId, require: true },
  description: { type: String, require: true },
  author: { type: String, require: false },
  title: { type: String, require: false },
  genre: { type: String, require: false },
  pages: { type: Number, require: false },
  date: { type: String, require: false },
  datetime: { type: Date, require: false },
});

const Posts = mongoose.models.Posts || mongoose.model("Posts", postSchema);
export default Posts;