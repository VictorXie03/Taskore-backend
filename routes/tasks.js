const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const { validateCookie } = require('./auth')

//GET BACK ALL THE TASKS
router.get('/', validateCookie, async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.json({ message: err });
    }
});

//SUBMITS A TASK
router.post('/', validateCookie, async (req, res) => {
    const task = new Task({
        task: req.body.task,
        date: req.body.date,
        description: req.body.description,
        points: req.body.points,
        reminder: req.body.reminder,
        isComplete: req.body.isComplete,
    });
    console.log(task)

    try {

        const savedTask = await post.save();
        res.json(savedTask);
    } catch (err) {
        res.json({ message: err })
    }
});
//SPECIFIC TASK
router.get('/:taskId', validateCookie, async (req, res) => {
    try {
        const task = await task.findById(req.params.taskId);
        res.json(task);
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete task
router.delete('/:taskId', validateCookie, async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.taskId });
        res.json(removedTask);
    } catch (err) {
        res.json({ message: err });
    }
});

//Update a task
router.patch('/:taskId', validateCookie, async (req, res) => {
    try {
        const updatedTask = await Post.updateOne(
            { _id: req.params.taskId },
            { $set: { task: req.body.task } }
        );
        res.json(updatedTask);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;