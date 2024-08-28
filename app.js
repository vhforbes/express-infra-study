require("dotenv").config(); // load environment variables from .env file

const express = require("express");
const app = express();

// Define a health check endpoint
app.use("/health", (req, res) => {
  res.status(200).send("OK"); // Respond with a status code of 200 and 'OK'
});

// Start the server on a specific port (e.g., 8080)
const port = 8080;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
