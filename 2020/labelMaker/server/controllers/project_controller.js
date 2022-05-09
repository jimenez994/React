const mongoose = require("mongoose");
const Project = require("../models/project_model");

module.exports = {
  getAllProjects: async (req, res) => {
    // get all projects
    const projects = await Project.find();
    let projectsRes = res.json(projects);
    console.log(projectsRes);
  },
  createProject: async (req, res) => {
    // create a new project
    try {
      const newProject = new Project(req.body);
      let saveProject = await newProject.save();
      console.log(saveProject);
      res.status(200).json({success:"nice"});
      
    } catch (err) {
      res.status(500).send(err);
      console.log(err);
    }
  }
};
