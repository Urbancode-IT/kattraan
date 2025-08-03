const checkRole = (requiredRoles) => {
  // Map role IDs to role names
  const roleIdToName = {
    1: "learner",
    2: "instructor",
    3: "admin",
    // Add more mappings as needed
  };

  return (req, res, next) => {
    let userRoles = req.user?.roles;
    // Normalize userRoles to always be an array
    if (!userRoles) userRoles = [];
    else if (typeof userRoles === "string" || typeof userRoles === "number")
      userRoles = [userRoles];
    else if (!Array.isArray(userRoles)) userRoles = [String(userRoles)];

    // Map numeric role IDs to role names
    const normalizedRoles = userRoles.map((r) => {
      if (typeof r === "number" && roleIdToName[r])
        return roleIdToName[r].toLowerCase();
      if (!isNaN(Number(r)) && roleIdToName[Number(r)])
        return roleIdToName[Number(r)].toLowerCase();
      return String(r).toLowerCase();
    });

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
