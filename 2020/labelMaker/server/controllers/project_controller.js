const mongoose = require("mongoose");
const Project = require("../models/project_model");

module.exports = {
  getAll: async (req, res) => {
    // get all projects
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  findByCode: async (req, res) => {
    // get project by code
    try {
      const project = await Project.findOne({ code: req.params.code });
      res.status(200).json(project);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  create: async (req, res) => {
    // create a new project
    try {
      const newProject = new Project(req.body);
      const project = await Project.findOne({ code: newProject.code });
      if (project) {
        res.status(400).send("Project already exists");
      } else {
        await newProject.save();
        res.status(201).json(newProject);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },
  update: async (req, res) => {
    // update a project
    try {
      const project = await Project.findOneAndUpdate(
        { code: req.params.code },
        req.body,
        { new: true }
      );
      res.status(200).json(project);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  deleteById: async (req, res) => {
    // delete a project by id
    try {
      await Project.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: "Project successfully deleted" });
    } catch (err) {
      res.status(500).send(err);
    }
  }
};
