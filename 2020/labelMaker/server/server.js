const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5001;
const app = express()
const connectDB = require('./config/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => res.send("App is running!"));

connectDB();
require("./config/routes")(app);


app.listen(port, () => {
  console.log(`Hey! you are in port ${port}`);
});