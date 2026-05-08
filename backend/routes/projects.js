const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");

router.post("/create", auth, async (req, res) => {
    if (req.user.role !== "Admin") return res.status(403).json({ msg: "Access denied" });

    const project = new Project({
        name: req.body.name,
        description: req.body.description,
        createdBy: req.user.id
    });

    await project.save();
    res.json(project);
});

router.get("/all", auth, async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

module.exports = router;