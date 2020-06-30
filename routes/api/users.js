const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const key = require("../../config/keys").secret;
const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../../mondel/User");

// Router Post api/user/register
router.post("/register", (req, res) => {
  let { name, username, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({
      msg: "Password do not match",
    });
  }

  // Check Email unique
  User.findOne({
    username: username,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "Username is already taken",
      });
    }
  });
  User.findOne({
    email: email,
  }).then((user) => {
    if (user) {
      return res.status(400).json({
        msg: "Email is already registered. Did you forgot your password?",
      });
    }
  });
  let newUser = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    username,
    password,
    email,
  });
  // Hash password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(201).json({
          success: true,
          msg: "User is now registered!",
        });
      });
    });
  });
});

// Router Post api/user/login
router.post("/login", (req, res) => {
  User.findOne({
    username: req.body.username,
  }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "Username is not found.",
        success: false,
      });
    }

    // Compare the password
    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        // User's password is correct and we need to send the JSON Token for that user
        const payload = {
          _id: user._id,
          username: user.username,
          name: user.name,
          email: user.email,
        };
        jwt.sign(
          payload,
          key,
          {
            expiresIn: "1h",
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              user: user,
              token: `Bearer ${token}`,
              msg: "You are now logged in.",
            });
          }
        );
      } else {
        return res.status(404).json({
          msg: "Incorrect password.",
          success: false,
        });
      }
    });
  });
});

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  let user = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) throw err;
      user.password = hash;
      User.updateOne({ _id: id }, { $set: user })
        .exec()
        .then((result) => {
          console.log(result);
          return res.status(201).json({
            success: true,
            msg: "User updated!",
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({
            msg: err,
          });
        });
    });
  });
  //   User.updateOne({ _id: id }, { $set: user })
  //     .exec()
  //     .then((result) => {
  //       console.log(result);
  //       return res.status(200).json({
  //         success: true,
  //         msg: "User updated",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json({
  //         msg: err,
  //       });
  //     });
});

router.delete("/delete/:userId", (req, res) => {
  const id = req.params.id;
  User.remove({ _id: id })
    .then((result) => {
      res.status(200).json({
        msg: "User deleted",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: err,
      });
    });
});

// Router Get api/users/profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      user: req.user,
      msg: "HI",
    });
  }
);
module.exports = router;
