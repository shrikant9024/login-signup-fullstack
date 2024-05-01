const express = require("express");
const router = express.Router();
const { handleSignup, handleLogin } = require("../controller/user");

router.get("/", (req, res) => {
  res.send("hey home ");
});

router.get("/signup", (req, res) => {
  res.send("hey signup ");
});

router.post("/signup", handleSignup);
router.post("/login", handleLogin);

module.exports = router;
