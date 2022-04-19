const express = require('express');
const port = process.env.PORT || 5001;
const app = express()
const connectDB = require('./config/db');

app.get('/', (req, res) => res.send("App is running!"));

connectDB();

app.listen(port, () => {
  console.log(`Hey! you are in port ${port}`);
});