const express = require("express");
const router = express.Router();
const TASKS = require("../model/taskModel");
const { createTask, getTask, updateTask, deleteTask, singleTask } = require("../controllers/taskController");

// Post request, C -- for create in CRUD operations

router.post("/task",createTask);

// Get request, R -- for read in CRUD operations

router.get("/task", getTask);

// update request, U -- for update in CRUD operations
router.patch("/task/:taskId",updateTask );

// delete request, D -- for delete in CRUD operations
router.delete("/task/:taskId", deleteTask);

// params for single task
router.get("/task/:taskId",singleTask);

module.exports = router;
