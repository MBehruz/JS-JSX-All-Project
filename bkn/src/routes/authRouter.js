const express = require("express");
const router = express.Router();
const Controller = require("../controllers/authController");

router.route("/user").post(Controller.login);
router.route("/admin").post(Controller.adminLogin);

module.exports = router;
