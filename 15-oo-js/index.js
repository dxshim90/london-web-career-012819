const todos = [
  { text: 'buy milk', completed: false },
  { text: 'conquer the world', completed: true },
  { text: '???', completed: false },
  { text: 'profit', completed: false }
]

todos.forEach(todo => new Todo(todo))
