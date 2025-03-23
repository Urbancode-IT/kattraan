const mongoose = require("mongoose");
const Role = require("../models/Role");

const insertRoles = async () => {
  try {
    const roles = [
      { roleName: 'learner', description: 'Learners can access courses, submit assignments, and interact with instructors.' },
      { roleName: 'instructor', description: 'Instructors can create courses, grade assignments, and interact with learners.' },
      { roleName: 'admin', description: 'Admins have full access to manage users, courses, and settings.' }
    ];

    const existingRoles = await Role.find({});
    console.log("Existing Roles in DB:", existingRoles);

    if (existingRoles.length === 0) {
      await Role.insertMany(roles);
      console.log("Roles inserted successfully.");
    } else {
      console.log("Roles already exist. Skipping insertion.");
    }
  } catch (error) {
    console.error("Error inserting roles:", error);
  }
};

// Temporarily hardcode the MongoDB URI
const MONGO_URI = "mongodb+srv://kattraanlms:kattraan123@kattraan.2wb5a.mongodb.net/?retryWrites=true&w=majority&appName=Kattraan";

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB.");
    insertRoles();  // Run the role insertion after DB connection
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
