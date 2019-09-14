const db = require("../models");

exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
    .then(newTodo => {
      res.status(201).json(newTodo);
    })
    .catch(err => res.send(err));
};

exports.getTodos = (req, res) => {
  db.Todo.find()
    .then(todos => {
      res.send(todos);
    })
    .catch(err => res.send(err));
};

exports.getTodo = (req, res) => {
  db.Todo.findById(req.params.id)
    .then(todo => {
      res.json(todo);
    })
    .catch(err => res.send(err));
};

exports.updateTodo = (req, res) => {
  db.Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(todo => {
      res.json(todo);
    })
    .catch(err => res.send(err));
};

exports.deleteTodo = (req, res) => {
  db.Todo.remove({ _id: req.params.id })
    .then(() => res.json({ message: "Success" }))
    .catch(err => res.send(err));
};

module.exports = exports;
