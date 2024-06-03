const router = require("express").Router();
const AdminRouter = require("./routes/adminRoutes");
const AuthRouter = require("./routes/authRouter");

router.use("/auth", AuthRouter);

router.use("/admin", AdminRouter);

module.exports = router;
