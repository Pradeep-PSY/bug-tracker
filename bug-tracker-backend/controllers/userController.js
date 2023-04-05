const { Router } = require("express");
const bcrypt = require("bcrypt");
const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')

const userController = Router();

userController.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    bcrypt.hash(password, 8, async function (err, hash) {
      if (err) {
        return res.send("singup failed, something went wrong try again later");
      }

      const new_user = new userModel({ email, password: hash });

      await new_user
        .save()
        .then(() => res.send("signup successfull"))
        .catch(() => res.send("something went wrong try again later"));
    });
  } else {
    return res.send("user already exists");
  }
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.send({msg:"Signup first to login", isAuth:false});
  } else {
    bcrypt.compare(password, user.password, async (err, result) => {
      if (err) {
        return res.send( {msg : "Something went wrong. Please try again later.", isAuth:false});
      } else if (result) {
        const token = jwt.sign({ email }, "userbase");
        res.send({msg:"successfull",isAuth:true, token});
      } else {
        return res.send({msg : "Invalid Credential", isAuth:false});
      }
    });
  }
});

module.exports = userController;
