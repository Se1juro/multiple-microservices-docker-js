const { Router } = require("express");
const {
  getAllUsers,
  createUsers,
  deleteAllUsers,
} = require("../controllers/users.controller");

const router = Router();

router.get("/api/users", getAllUsers);

router.post("/api/users", createUsers);

router.delete("/api/users", deleteAllUsers);

module.exports = router;
