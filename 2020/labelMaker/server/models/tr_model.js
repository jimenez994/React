const mongoose = require("mongoose");

const TRSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    _port: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "port",
    }],
    _project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "project",
    }
  },
  { timestamp: true }
);

module.exports = mongoose.model("TR", TRSchema);
