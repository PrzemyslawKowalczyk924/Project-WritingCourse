import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  content: { type: String, require: true },
  author: { type: String, require: false },
  title: { type: String, require: false },
  genre: { type: String, require: false },
  pages: { type: Number, require: false },
  date: { type: Number, require: false },
});

const Articles = mongoose.models.Articles || mongoose.model("Articles", articleSchema);
export default Articles;