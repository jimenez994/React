const mongoose = require("mongoose");

const FaceplateSchema = new mongoose.Schema(
  {
    _tr: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TR",
    },
    roomNumber: {
      type: String,
    },
    faceplateType: {
      type: String,
    },
    faceplateLocation: {
      type: Number,
    },
    description: {
      type: String,
    },
    _port: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "port",
    }]
  },
  { timestamp: true }
);

module.exports = mongoose.model("Faceplate", FaceplateSchema);
