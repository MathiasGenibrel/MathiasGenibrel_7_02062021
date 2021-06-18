const jwt = require("jsonwebtoken");
const getUserIDByToken = require("../utils/decodeToken");

module.exports = (req, res, next) => {
  const userId = req.body.userId;
  
  try {
    if (!userId) throw "UserId in req.body cannot be empty";
    if (userId && userId !== getUserIDByToken(req)) throw "Invalid user ID";

    next();
  } catch (err) {
    res.status(401).send({
      message: err || "Token invalid",
    });
  }
};
