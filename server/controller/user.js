const User = require("../models/user");

async function handleSignup(req, res) {
  const { name, email, password } = req.body;
  const result = await User.create({
    name: name,
    email: email,
    password: password,
  });
  console.log("result", result);
  return res.status(200).json({ msg: "success" });
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  if (user.password !== password) {
    return res.status(401).json({ error: "Invalid password" });
  }

  return res.status(200).json({ message: "login succesfull" });
}

module.exports = { handleSignup, handleLogin };
