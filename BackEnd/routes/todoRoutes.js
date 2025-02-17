const express = require("express");
const Router = express.Router();
const Todo = require("../models/todoModel");
const isAuth = require("../middlewares/isAuth");
const { body } = require("express-validator");
const {
  retrieveTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoControllers");

const validateTodo = [
  body("title").trim().notEmpty().withMessage("Title is required"),
  body("title")
    .isLength({ min: 10, max: 99 })
    .withMessage("Title must be between 10 and 99 characters long.")
    .custom(async (title) => {
      const existingTodo = await Todo.findOne({ title });
      if (existingTodo) {
        throw new Error("Todo already exists.");
      }
    }),
  body("priority").trim().notEmpty().withMessage("Priority is required"),
  body("deadline")
    .trim()
    .notEmpty()
    .withMessage("Deadline is required")
    .isDate()
    .withMessage("Deadline must be a valid date"),
];
Router.get("/todos/:_id?", retrieveTodos);

Router.post("/createtodos", validateTodo, createTodo);

Router.patch("/todos/:_id", validateTodo, updateTodo);

Router.delete("/delete/:_id", deleteTodo);

module.exports = Router;
