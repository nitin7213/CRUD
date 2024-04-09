const UserModel = require("../model/Users");

const handlePost = async (req, res) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const handleGet = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const handleGetId = async (req, res) => {
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
};

const handlePatch = async (req, res) => {
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
};

const handleDelete = async (req, res) => {
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
};

module.exports = {
  handlePost,
  handleDelete,
  handleGet,
  handlePatch,
  handleGetId,
};
