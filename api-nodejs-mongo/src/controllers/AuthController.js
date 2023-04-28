const express = require("express");

const UserModel = require("../models/User");

const router = express.Router();

const bcryptjs = require("bcryptjs");

const jwt = require("jsonwebtoken");

const authConfig = require("../config/auth.json");

const generateToken = (user = {}) => {
    return jwt.sign(
        {
          id: user.id,
        },
        authConfig.secret,
        {
          expiresIn: 86400,
        }
      );
}
// localhost/auth/register
router.post("/register", async (req, res) => {
  const { email } = req.body;
  if (await UserModel.findOne({ email })) {
    return res.status(400).json({
      error: true,
      message: "User already exists",
    });
  }
  const user = await UserModel.create(req.body);

  return res.json({
    error: false,
    message: "Registered with success!",
    data: user,
    token: generateToken(user)
  });
});
// localhost/auth/authenticate
router.post("/authenticate", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email }).select("+password").lean();
  if (!user) {
    return res.status(400).json({
      error: true,
      message: "User not found",
    });
  }
  if (!(await bcryptjs.compare(password, user.password))) {
    return res.status(400).send({
      error: true,
      message: "Invalid password",
    });
  }

  user.password = "";

  return res.json({
    user,
    token: generateToken(user),
  });
});

module.exports = router;
