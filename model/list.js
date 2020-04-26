import mongoose from 'mongoose';

const listSchema = new mongoose.Schema({
  from: String,
  message: String,
});

const model = mongoose.model('list', listSchema);

export default model;
