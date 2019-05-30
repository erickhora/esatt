const express = require("express");
const { body } = require("express-validator/check");

const User = require("../models/user");
const authController = require("../controllers/auth");
const isAuth = require("../is-auth");

const router = express.Router();

router.put(
  "/signup",
  isAuth,
  [
    body("email")
      .isEmail()
      .withMessage("Por favor coloque um email válido.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject("Email já cadastrado.");
          }
        });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 6 }),
    body("name")
      .trim()
      .not()
      .isEmpty(),
    body("lastname")
      .trim()
      .not()
      .isEmpty()
  ],
  authController.signup
);

router.post("/login", isAuth, authController.login);

module.exports = router;
