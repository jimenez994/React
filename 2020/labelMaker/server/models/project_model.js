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
    _tr: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "tr"
    }]
  },
  { timestamp: true }
);

module.exports = mongoose.model("Project", ProjectSchema);
