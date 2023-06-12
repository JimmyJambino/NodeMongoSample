import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    trim: true,
  },
  createDate: Date
});

// module.exports = mongoose.model('Task', taskSchema);
export default mongoose.model('User', userSchema);