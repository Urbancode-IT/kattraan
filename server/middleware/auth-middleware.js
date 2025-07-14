require("dotenv").config();
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization || "";
  // Expecting: "Bearer <token>"
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "User is not authenticated",
    });
  }

  const token = authHeader.slice(7).trim(); // remove "Bearer "

  try {
    // verify against the real secret
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // normalize into req.user
    req.user = {
      _id: payload._id || payload.user_id,
      roles: payload.roles || payload.role_id,
      iat: payload.iat,
      exp: payload.exp,
    };

    return next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authenticate;
