const express = require("express");
const { body } = require("express-validator/check");

const appController = require("../controllers/app");
const isAuth = require("../is-auth");

const router = express.Router();

//GET Budgets
router.get("/", isAuth, appController.getBudgets);
router.get("/history", isAuth, appController.getBudgets);

//POST Budget
router.post("/new-project", isAuth, appController.postBudget);

//GET Budget
router.get("/:budgetId", isAuth, appController.getBudget);

module.exports = router;
