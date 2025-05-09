const mongoose = require("mongoose");
const Role = require("../models/Role");

// MongoDB URI (you can store this in a .env file later)
const MONGO_URI =
  "mongodb+srv://kattraanlms:kattraan123@kattraan.2wb5a.mongodb.net/?retryWrites=true&w=majority&appName=Kattraan";

// Roles to seed
const roles = [
  {
    roleName: "learner",
    description:
      "Learners can access courses, submit assignments, and interact with instructors.",
  },
  {
    roleName: "instructor",
    description:
      "Instructors can create courses, grade assignments, and interact with learners.",
  },
  {
    roleName: "admin",
    description:
      "Admins have full access to manage users, courses, and settings.",
  },
];

const insertRoles = async () => {
  try {
    for (const role of roles) {
      const exists = await Role.findOne({ roleName: role.roleName });
      if (!exists) {
        await Role.create(role);
        console.log(`✅ Inserted role: ${role.roleName}`);
      } else {
        console.log(`ℹ️ Role '${role.roleName}' already exists. Skipping.`);
      }
    }
    console.log("🎉 Role seeding completed.");
  } catch (error) {
    console.error("❌ Error inserting roles:", error);
  }
};

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to MongoDB.");
    insertRoles().then(() => mongoose.disconnect());
  })
  .catch((error) => {
    console.error("❌ Error connecting to the database:", error);
  });
