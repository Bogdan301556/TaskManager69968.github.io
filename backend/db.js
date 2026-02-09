const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://oleksandr:54911588@cluster0.lss8pfe.mongodb.net/?appName=Cluster0"
  );
  console.log("MongoDB connected");
};

module.exports = connectDB;
