const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

router.post("/create", auth, async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

router.get("/all", auth, async (req, res) => {
    const tasks = await Task.find().populate("assignedTo", "name");
    res.json(tasks);
});

router.put("/update/:id", auth, async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
});

module.exports = router;