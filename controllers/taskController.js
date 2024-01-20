const TASKS = require("../model/taskModel");

// Post ftn, C -- for create in CRUD operations

const createTask = async (req, res) => {
  // console.log(req.body);
  const { title, description, tags } = req.body;

  if (!title || !description || !tags) {
    res.status(400).json({ success: false, message: "please fill all fields" });
    return;
  }
  try {
    await TASKS.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "task created successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
// read ftn, R -- for read in CRUD operations

const getTask = async (req, res) => {
    try {
      const tasks = await TASKS.find({});
  
      if (tasks.length < 1) {
        return res.status(404).json({ success: false, mesage: "No tasks found" });
      }
  
      res.status(200).json({ success: "true", message: "all task(s)", tasks });
    } catch (error) {
      res.status(500).json(error);
    }
  }


// update ftn, U -- for update in CRUD operations

const updateTask = async (req, res) => {
    const { taskId } = req.params;
    try {
      await TASKS.findOneAndUpdate({ _id: taskId }, req.body, {
        new: true,
        runValidators: true,
      });
      res
        .status(200)
        .json({ success: "true", message: "task updated successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  }


// delete ftn, D -- for delete in CRUD operations
const deleteTask = async (req, res) => {
    const { taskId } = req.params;
    try {
      await TASKS.findOneAndDelete({ _id: taskId });
      res.status(200).json({ success: true, message: "deleted successfully" });
    } catch (error) {
      res.status(500).json(error);
    }
  }


// params ftn, for getting a sungle task

const singleTask =  async (req, res) => {
    const { taskId } = req.params;
    try {
      const task = await TASKS.findOne({ _id: taskId });
      res.status(200).json({ success: true, task });
    } catch (error) {
      res.status(500).json(error);
    }
  }


module.exports = {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  singleTask
};
