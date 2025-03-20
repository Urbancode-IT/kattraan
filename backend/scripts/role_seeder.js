const mongoose = require("mongoose");
const Role = require("../../models/Role");
require("dotenv").config();

const insertRoles = async () => {
  try {
    const roles = [
      { roleName: 'learner', description: 'Learner role description' },
      { roleName: 'instructor', description: 'Instructor role description' },
      { roleName: 'admin', description: 'Admin role description' }
    ];

    const existingRoles = await Role.find({});
    if (existingRoles.length === 0) {
      await Role.insertMany(roles);
      console.log("Roles inserted successfully.");
    } else {
      console.log("Roles already exist.");
    }
  } catch (error) {
    console.error("Error inserting roles:", error);
  }
};

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB.");
    insertRoles();  // Run the role insertion after the DB connection
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
