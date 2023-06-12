// const mongoose = require('mongoose');
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    trim: true,
  },
  createDate: Date,
  completedDate: Date,
  completed: Boolean
});

// module.exports = mongoose.model('Task', taskSchema);
export default mongoose.model('Task', taskSchema);