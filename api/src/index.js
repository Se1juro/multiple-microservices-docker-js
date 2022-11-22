require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const usersRoutes = require("./routes/users.routes");
// Constants
const PORT = process.env.PORT;

// App
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(usersRoutes);

const server = app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

module.exports = { app, server };
