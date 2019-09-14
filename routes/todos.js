var express = require("express");
var router = express.Router();
var helpers = require("../helpers");

router
  .route("/")
  .get(helpers.getTodos)
  .post(helpers.createTodo);

router
  .route("/:id")
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo);

module.exports = router;
