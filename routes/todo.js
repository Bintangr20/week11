const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Rute untuk operasi CRUD
router.get('/healthcheck', todoController.healthCheck)
router.get('/todos', todoController.listTodos);
router.get('/todos/:id', todoController.getTodo);
router.post('/todos/', todoController.createTodo);
router.delete('/todos/:id', todoController.deleteTodo);

module.exports = router;
