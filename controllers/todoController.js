// controllers/todoController.js
const { Todo } = require('../models');

exports.healthCheck= (req, res,) => {
  res.status(200).json({message: "Hello World"})
}

exports.listTodos = async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
};

exports.getTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
};

exports.createTodo = async (req, res) => {
  const { title } = req.body;
  const todo = await Todo.create({ title });
  res.status(201).json(todo);
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  await todo.destroy();
  res.json({ message: 'Todo deleted' });
};
