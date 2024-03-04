import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const novelSchema = new Schema({
  _id: { type: ObjectId, require: true },
  content: { type: String, require: true },
  author: { type: String, require: false },
  title: { type: String, require: false },
  genre: { type: String, require: false },
  pages: { type: Number, require: false },
  date: { type: String, require: false },
});

const Novels = mongoose.models.Novels || mongoose.model("Novels", novelSchema);
export default Novels;
