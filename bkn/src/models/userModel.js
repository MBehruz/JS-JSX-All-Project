const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, minlength: 3, maxlength: 200 },
    lastName: { type: String, minlength: 3, maxlength: 200 },
    birthDay: { type: String },
    age: { type: Number },
    address: { type: String },
    phone: { type: String, minlength: 9 },
    role: { type: String },
    password: { type: String, minlength: 6 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("users", UserSchema);
