class Todo {
  static all = []

  constructor(todo) {
    this.text = todo.text
    this.completed = todo.completed
    this.todoList = document.querySelector('#todo-list')
    this.create()
    this.render()
    Todo.all.push(this)
  }

  create() {
    const el = document.createElement('li')
    el.innerText = this.text
    this.el = el
  }

  render() {
    this.todoList.appendChild(this.el)
  }

  remove() {
    this.el.remove()
  }

  updateText(text) {
    this.text = text
    this.el.innerText = text
  }
}
