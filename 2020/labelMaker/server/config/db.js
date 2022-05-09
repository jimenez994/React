const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const fs = require("fs");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    var models_path = __dirname + "/../models";
    fs.readdirSync(models_path).forEach((file) => {
      if (file.includes(".js")) {
        console.log("loading " + file + "...");
        require(models_path + "/" + file);
      }
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failures
    process.exit(1);
  }
};

module.exports = connectDB;
