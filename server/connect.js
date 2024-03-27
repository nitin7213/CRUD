const mongoose = require("mongoose");

const ConnectDb = async (LINK) => {
  await mongoose.connect(LINK);
};

module.exports = { ConnectDb };
