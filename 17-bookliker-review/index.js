const currentUser = {"id":1, "username":"Pouros"}

document.addEventListener('DOMContentLoaded', function () {

  function getBookData() {
    fetch('http://localhost:3000/books')
      .then(resp => resp.json())
      .then(data => showListOfBooks(data))
  }
    getBookData()

    function showListOfBooks(books) {
      const listPanel = document.querySelector('#list-panel')
      const showPanel = document.querySelector('#show-panel')
      const list = document.querySelector('#list')

      books.forEach((book) => {
        const bookItem = document.createElement('li')
        bookItem.innerText = book.title
        bookItem.id = book.id
        list.append(bookItem)
        list.addEventListener('click', event => {
          if(event.target.id === `${book.id}`) {
            showPanel.innerHTML = 
            `<h2> ${book.title} </h2>
            <img src ="${book.img_url}" </img>
            <p> ${book.description} </p>
            <p id="userList"> </p>
            <button> Read Book </button>`

        const userList = document.querySelector('#userList')
        book.users.forEach( user => {
          userList.innerHTML += `<li>${user.username}</li>`
        })

        const readButton = document.querySelector('button')
        readButton.addEventListener('click', event => {
          if (book.users.map(user => user.id).includes(currentUser.id)) return;

          fetch(`http://localhost:3000/books/${book.id}`, {
            method: 'PATCH',
            body: JSON.stringify({'users': [...book.users, currentUser]}),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(resp => resp.json())
          .then( updatedBook => {
            book = updatedBook
            userList.innerHTML += `<li> ${book.users[book.users.length -1].username} </li>`
          })
        })

          }
        })
      })
    }
})
