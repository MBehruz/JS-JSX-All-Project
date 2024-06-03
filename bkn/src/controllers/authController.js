const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("../util/error");

module.exports = {
  login: async function (req, res, next) {
    try {
      const doc = await UserModel.findOne({
        phone: req.body?.phone,
        password: req.body?.password,
      }).exec();

      if (!doc)
        return res
          .status(404)
          .json({ code: "A112", message: "user not found" });
      const token = jwt.sign(
        {
          _id: doc?._id,
          title: {
            firstName: doc?.firstName,
            lastName: doc?.lastName,
            phone: doc?.phone,
          },
          role: doc?.role,
        },
        process.env.TOKEN_SECRET_KEY,
        { algorithm: "HS256", expiresIn: process.env.TOKEN_EXPIRESIN }
      );
      return res.status(200).json({ token });
    } catch (err) {
      return next(new ErrorHandler(403, "Forbidden access", "E114"));
    }
  },
  adminLogin: async function (req, res, next) {
    try {
      console.log(
        process.env.PHONE == req.body.phone &&
          process.env.PASSWORD == req.body.password
      );
      if (
        process.env.PHONE == req.body.phone &&
        process.env.PASSWORD == req.body.password
      ) {
        const token = jwt.sign(
          {
            _id: null,
            title: {
              firstName: "Admin",
              lastName: "Doe",
              phone: req.body.phone,
            },
            role: "admin",
          },
          process.env.TOKEN_SECRET_KEY,
          { algorithm: "HS256", expiresIn: process.env.TOKEN_EXPIRESIN }
        );
        return res.status(200).json({ token });
      } else {
        return res
          .status(404)
          .json({ code: "A112", message: "user not found" });
      }
    } catch (err) {
      return next(new ErrorHandler(403, "Forbidden access", "E114"));
    }
  },
};
