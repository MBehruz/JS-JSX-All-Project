const UserModel = require("../models/userModel");
const { ErrorHandler } = require("../util/error");

module.exports = {
  // add new User
  addNew: async function (req, res, next) {
    try {
      let user = await UserModel.create(req.body);
      if (!user) {
        return res.status(400).json({ message: "error" });
      }

      let users = await UserModel.find({});
      global.io.emit("users", { data: users });

      return res.status(201).json({ message: "success" });
    } catch (error) {
      return next(new ErrorHandler(400, error));
    }
  },
  // get all users
  getAll: async function (req, res, next) {
    try {
      let docs;
      let data = {};
      let { firstName, phone, limit, page } = req.query;

      let options = {
        limit: limit || 10,
        page: page || 1,
      };

      if (firstName) {
        data["firstName"] = {
          $regex: new RegExp(firstName, "i"),
        };
      }

      if (phone) {
        data["phone"] = {
          $regex: new RegExp(phone, "i"),
        };
      }

      if (limit && page) {
        docs = await UserModel.paginate(data, options);
      } else {
        docs = await UserModel.find(data);
      }
      if (!docs) {
        return res.status(400).json({ message: "error" });
      }
      return res.status(200).json(docs);
    } catch (error) {
      return next(new ErrorHandler(400, error));
    }
  },
  //   get One User
  getOne: async function (req, res, next) {
    try {
      const doc = await UserModel.findById(req.params.id);
      if (!doc) {
        return res
          .status(404)
          .json({ message: `not found ${req.params.id} user` });
      }
      return res.status(200).json(doc);
    } catch (error) {
      return next(new ErrorHandler(400, error));
    }
  },
  //   update One User
  updateOne: async function (req, res, next) {
    try {
      const doc = await UserModel.findByIdAndUpdate(req.params.id, req.body);
      if (!doc) {
        return res
          .status(404)
          .json({ message: `not found ${req.params.id} user or error data` });
      }

      let users = await UserModel.find({});
      io.emit("users", { data: users });

      return res.status(200).json({ message: "success" });
    } catch (error) {
      return next(new ErrorHandler(400, error));
    }
  },
  // delete One User
  deleteOne: async function (req, res, next) {
    try {
      const doc = await UserModel.findByIdAndDelete(req.params.id);
      if (!doc) {
        return res
          .status(404)
          .json({ message: `not found ${req.params.id} user` });
      }
      return res.status(200).json({ message: "success" });
    } catch (error) {
      return next(new ErrorHandler(400, error));
    }
  },
};
