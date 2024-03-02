import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const novelSchema = new Schema({
  _id: { type: ObjectId, require: true },
  content: { type: String, require: true },
  author: { type: Number, require: false },
  title: { type: String, require: false },
  genre: { type: String, require: false },
  pages: { type: Number, require: false },
  date: { type: Number, require: false },
});

const Novel = mongoose.models.Novel || mongoose.model("Novel", novelSchema);

export default Novel;

//module.exports = mongoose.model.Novel || mongoose.model('Novel', novelSchema);