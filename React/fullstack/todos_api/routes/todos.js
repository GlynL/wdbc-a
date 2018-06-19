var express = require("express");
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/todos");

// prettier-ignore
router.route("/")
  // get all todos
  .get(helpers.getTodos)
  // create todo
  .post(helpers.createTodo)

// get a single todo

router
  .route("/:todoId")
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo);

module.exports = router;
