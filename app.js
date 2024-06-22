const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const port = 3000;
// Middleware
app.use(express.json());

// DB connection
mongoose.connect(
  "mongodb://admin:admin@localhost:27017/todo?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Connection Error!");
});

db.once("open", () => {
  console.log("Connected to DB! ");
});

app.use(taskRoutes);

app.listen(port, () => {
  console.log("Server started on port 3000!");
});
