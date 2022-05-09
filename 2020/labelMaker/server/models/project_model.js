const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    _floor: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Floor",
    }]
  },
  { timestamp: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
