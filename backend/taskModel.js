import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
});

export const Task = mongoose.model('Task', taskSchema);
