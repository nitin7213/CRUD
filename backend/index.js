const express = require("express");
const cors = require("cors");
const { ConnectDb } = require("./connect");
const routes = require("./routes/Users");

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

//connection
ConnectDb("mongodb://127.0.0.1:27017/crud");

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Server is running at " + `http://localhost:${PORT}`);
});
