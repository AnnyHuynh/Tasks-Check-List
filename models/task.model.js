const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  Done: { type: Boolean, default: false },
  DueDate: { type: Date },
  TaskName: { type: String },
  PerformBy: { type: String},
  ODOM: { type: String },
  CCAK: { type: String },
  CCBHI: { type: String },
  SGWS: { type: String },
  NWB: { type: String },
  Quarterly: { type: String },
  Note: { type: String }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
