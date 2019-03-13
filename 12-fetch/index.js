const API = 'http://localhost:3000/tasks';
const todoList = document.querySelector('.app__todo_list');
const todoInput = document.querySelector('.app__header__todo_input');

const getTodos = (url) => {
    return fetch(url)
        .then(response =>response.json())
};

const postTodo = (taskText) => {
    const params = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({task: taskText})
    };

    fetch('http://localhost:3000/tasks', params)
        .then(response =>response.json())
        .then(data => {
            createTodoItem(data)
        })
};

const deleteTodo = () => {

};

const createTodoItem = (item) => {
    const li = document.createElement('li');
    li.innerHTML = item.task;
    li.dataset.taskId = item.id;

    todoList.insertBefore(li, todoList.firstChild);
};

const renderTodosList = () => {
    todoList.innerHTML = "";

    getTodos(API)
        .then(tasks => {
            tasks.forEach(task => {
                createTodoItem(task)
            })
        })

};

todoInput.addEventListener('submit', (event) => {
    event.preventDefault();

    event.target.todo.value && postTodo(event.target.todo.value);
    todoInput.reset();
});

todoList.addEventListener('click', (event) => {
    if (event.target.dataset.taskId) {

    }
});


window.addEventListener('DOMContentLoaded', renderTodosList);