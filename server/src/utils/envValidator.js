const logger = require("./logger");

exports.validateEnvironment = (requiredVars) => {
  const missingVars = requiredVars.filter((key) => !process.env[key]);
  if (missingVars.length > 0) {
    missingVars.forEach((varName) => {
      logger.error(`Missing environment variable: ${varName}`);
    });
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
  }
  logger.info("All required environment variables are defined");
};
