import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import { Task } from "./taskModel.js";
import { connectDB } from "./dbIndex.js"

dotenv.config({
  path: './.env'
})

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

connectDB().then(()=>{
  app.listen(PORT || 4000, ()=>{
      console.log(`Server is running on port ${PORT}`);
  })
})
.catch((err) => {
  console.log("Mongo DB connection failed", err)
});

app.get('/api/video/:taskNumber', async (req, res) => {
  const { taskNumber } = req.params;

  try {
    const task = await Task.findOne({ taskNumber: Number(taskNumber) });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ videoUrl: task.videoUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.post('/api/video', async (req, res) => {
  const {taskNumber, videoUrl} = req.body;

  try {
    const newTask = new Task({
      taskNumber: Number(taskNumber),
      videoUrl: videoUrl,
    });

    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});