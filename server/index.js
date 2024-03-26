const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserModel = require("./model/Users");

const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crud");

app.post("/create", async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const userId = await UserModel.findById(req.params.id);
    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(userId);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const userId = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(userId);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const result = await UserModel.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(201).json({ status: "Deleted", Collection: result });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.listen(PORT, () => {
  console.log("Server is running");
});
