const mongoose = require("mongoose");

const FloorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    _tr: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "TR",
    }],
    _facePlate: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faceplate",
    }],
  },
  { timestamp: true }
);

module.exports = mongoose.model("Floor", FloorSchema);
