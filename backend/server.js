const express = require('express');
const cors = require('cors');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: 'todo-secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Data files
const usersFile = path.join(__dirname, 'data', 'users.json');
const todosFile = path.join(__dirname, 'data', 'todos.json');

// Initialize data files
const initData = () => {
  const dataDir = path.join(__dirname, 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir);
  }
  
  if (!fs.existsSync(usersFile)) {
    fs.writeFileSync(usersFile, JSON.stringify([
      { id: 1, username: 'admin', password: 'password' }
    ], null, 2));
  }
  
  if (!fs.existsSync(todosFile)) {
    fs.writeFileSync(todosFile, JSON.stringify([], null, 2));
  }
};

// Helper functions
const readUsers = () => JSON.parse(fs.readFileSync(usersFile, 'utf8'));
const readTodos = () => JSON.parse(fs.readFileSync(todosFile, 'utf8'));
const writeTodos = (todos) => fs.writeFileSync(todosFile, JSON.stringify(todos, null, 2));

// Auth middleware
const requireAuth = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
};

// Auth routes
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    req.session.userId = user.id;
    res.json({ id: user.id, username: user.username });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy();
  res.json({ message: 'Logged out' });
});

app.get('/api/auth/me', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  const users = readUsers();
  const user = users.find(u => u.id === req.session.userId);
  res.json({ id: user.id, username: user.username });
});

// Todo routes
app.get('/api/todos', requireAuth, (req, res) => {
  const todos = readTodos().filter(todo => todo.userId === req.session.userId);
  res.json(todos);
});

app.post('/api/todos', requireAuth, (req, res) => {
  const { title } = req.body;
  const todos = readTodos();
  const newTodo = {
    id: Date.now(),
    userId: req.session.userId,
    title,
    completed: false
  };
  todos.push(newTodo);
  writeTodos(todos);
  res.json(newTodo);
});

app.put('/api/todos/:id', requireAuth, (req, res) => {
  const todos = readTodos();
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id) && t.userId === req.session.userId);
  
  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  
  todos[todoIndex].completed = !todos[todoIndex].completed;
  writeTodos(todos);
  res.json(todos[todoIndex]);
});

app.delete('/api/todos/:id', requireAuth, (req, res) => {
  const todos = readTodos();
  const filteredTodos = todos.filter(t => !(t.id === parseInt(req.params.id) && t.userId === req.session.userId));
  writeTodos(filteredTodos);
  res.json({ message: 'Todo deleted' });
});

// Initialize and start server
initData();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
