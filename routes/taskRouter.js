const express = require("express");
const router = express.Router();
const TASKS = require("../model/taskModel");
const { createTask, getTask, updateTask, deleteTask, singleTask, getAllTasksByUser } = require("../controllers/taskController");
const auth = require('../middleware/auth')


// ftn to cheq auth


// Post request, C -- for create in CRUD operations

router.post("/task",auth,createTask);

// Get request, R -- for read in CRUD operations

// router.get("/task",getTask);

// ALl tasks by a user
router.get('/task/:userId',auth,getAllTasksByUser)

// update request, U -- for update in CRUD operations
router.patch("/task/:taskId",auth,updateTask );

// delete request, D -- for delete in CRUD operations
router.delete("/task/:taskId",auth, deleteTask);

// params for single task
router.get("/task/:taskId",auth,singleTask);

module.exports = router;
