const checkRole = (requiredRoles) => {
    return (req, res, next) => {
      const userRoles = req.user?.roles || [];
  
      // userRoles might come from token, convert to lowercase strings
      const normalizedRoles = userRoles.map((r) => r.toLowerCase());
  
      const hasRequiredRole = requiredRoles.some((role) =>
        normalizedRoles.includes(role.toLowerCase())
      );
  
      if (!hasRequiredRole) {
        return res.status(403).json({
          success: false,
          message: "Access denied. Insufficient role.",
        });
      }
  
      next();
    };
  };
  
  module.exports = checkRole;
  