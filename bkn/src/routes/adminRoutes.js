const router = require("express").Router();
const UserController = require("../controllers/userController");
const authenticate = require("../util/authenticate");

router.route("/users").get(UserController.getAll);

//

router.use(authenticate);
router.route("/users").post(UserController.addNew);
router.route("/users/:id").get(UserController.getOne);
router.route("/users/:id").put(UserController.updateOne);
router.route("/users/:id").delete(UserController.deleteOne);

module.exports = router;
