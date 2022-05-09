const mongoose = require("mongoose");

const PortSchema = new mongoose.Schema(
  {
    _tr: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TR",
    },
    rack: {
      type: Number
    },
    patchPanel: {
      type: String
    },
    portNumber: {
      type: Number
    },
    description: {
      type: String,
    },
    _facePlate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Faceplate",
    }
  },
  { timestamp: true }
);

module.exports = mongoose.model("Port", PortSchema);
