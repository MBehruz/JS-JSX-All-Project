const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("./error");
const User = require("../models/userModel");
const bluebird = require("bluebird");
bluebird.promisifyAll(jwt);

module.exports = async function (req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (bearerHeader) {
    try {
      const bearer = bearerHeader.split(" ");
      const bearerToken = bearer[1];
      const decoded = await jwt.verifyAsync(
        bearerToken,
        process.env.TOKEN_SECRET_KEY
      );

      if (!decoded)
        return new ErrorHandler(403, "Error: Token is not valid", "MA100");

      const userActive = await User.findById(decoded._id).exec();

      if (!userActive && decoded.role !== "admin") {
        return res
          .status(403)
          .json({ message: "Error: Authorizated user not found" });
      }

      req.user = decoded;
      return next();
    } catch (error) {
      return next(
        new ErrorHandler(403, "Error: Authorization failed", "MA102")
      );
    }
  } else {
    return next(new ErrorHandler(403, "Error: Not authorized", "MA103"));
  }
};
