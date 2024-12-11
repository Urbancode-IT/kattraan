const bcrypt = require("bcryptjs");

async function testBcrypt() {
  const password = "SecurePassword123!";
  console.log("Original Password:", password);

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword);

  // Verify the password
  const isMatch = await bcrypt.compare(password, hashedPassword);
  console.log("Password Match Result:", isMatch);
}

testBcrypt();
