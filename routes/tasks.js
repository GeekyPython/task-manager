const { Router } = require('express');
const express = require('express');
const {getTasks,addTask,getTask,updateTask,deleteTask} = require('../controllers/tasks');
const tasks = express.Router();

//GET request to get all the tasks
tasks.route('/').get(getTasks).post(addTask);
tasks.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = tasks;

