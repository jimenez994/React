const mongoose = require("mongoose");
const TR = require("../models/tr_model");
const Project = require("../models/project_model");

module.exports = {
  // GET /api/trs
  getAll: async (req, res) => {
    try {
      const trs = await TR.find({});
      res.status(200).json(trs);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // GET /api/tr/:id
  findById: async (req, res) => {
    try {
      const tr = await TR.findById(req.params.id);
      res.status(200).json(tr);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // POST /api/create/tr
  create: async (req, res) => {
    try {
      const newTR = new TR(req.body);
      const tr = await TR.findOne({ location: newTR.location });
      if (tr) {
        res.status(400).send("TR already exists");
      } else {
        const saveTR = await newTR.save();
        await Project.findByIdAndUpdate(
          req.body._project,
          { $push: { _tr: saveTR._id } },
          { new: true, useFindAndModify: false }
        );
        res.status(201).json(newTR);
      }
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // Update /api/update/tr/:id
  update: async (req, res) => {
    try {
      const tr = await TR.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
      });
      res.status(200).json(tr);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  // DELETE /api/delete/tr/:id_tr/:id_project
  deleteById: async (req, res) => {
    try {
      await TR.findByIdAndDelete(req.params.id_tr);
      const someProject = await Project.findByIdAndUpdate(
        req.params.id_project,
        { $pull: { _tr: req.params.id_tr } },
        { new: true, useFindAndModify: false }
      );
      res.status(200).json({ success: "TR successfully deleted" });
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
