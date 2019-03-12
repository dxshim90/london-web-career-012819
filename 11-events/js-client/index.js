console.log('Welcome from index.js')
const formEl = document.querySelector('#add-book-form')
const tbodyEl = document.querySelector('tbody')

// Full JS version: (yawn)
function addBook (book) {
  // create an element to append: tr
  const trEl = document.createElement('tr')

  // create the cell elements
  const tdEl1 = document.createElement('td')
  const tdEl2 = document.createElement('td')
  const tdEl3 = document.createElement('td')

  // fill in the text
  tdEl1.innerText = book.title
  tdEl2.innerText = book.description
  tdEl3.innerText = book.releaseYear

  // append all the things!
  trEl.append(tdEl1, tdEl2, tdEl3)
  tbodyEl.append(trEl)
}

// Full innerHTML version
/*
  this version makes uses innerHTML and string interpolation
  to get the job done
  a drawback is: we never save any of the elements in variables
  so it's not as easy to refer back to them later on
*/
function addBookFullInnerHTML (book) {
  // notice the `+=`
  // why are we doing that instead of `=`?
  tbodyEl.innerHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.description}</td>
      <td>${book.releaseYear}</td>
    </tr>
  `
}

// Hybrid version:
/*
  This is my preferred version most of the time
  I like this one because it's not as tedious as the full JS version
  But I still get to save the main element into a variable, in case I need it
*/
function addBookHybrid (book) {
  // find the parent element: tbody
  const trEl = document.createElement('tr')
  trEl.id = `row-${book.id}`

  trEl.innerHTML = `
    <td>${book.title}</td>
    <td>${book.description}</td>
    <td>${book.releaseYear}</td>
    <td><button class='delete-btn' data-id="${book.id}" >X</button></td>
  `

  // const deleteBtn = trEl.querySelector('.delete-btn')
  // deleteBtn.addEventListener('click', () => {
  //   trEl.remove()
  // })

  tbodyEl.append(trEl)
}

const books = [
  {
    id: 1,
    title: "Harry Potter and the Philosopher's Stone",
    description: "Yer a wizard, Harry.",
    releaseYear: 1997
  },
  {
    id: 2,
    title: 'Harry Potter and the Chamber of Secrets',
    description: 'Hiss!',
    releaseYear: 1998
  },
  {
    id: 3,
    title: 'Lord of the Rings, Fellowship of the Ring',
    description: 'You shall not pass!',
    releaseYear: 1954
  }
]

function addBooks (books) {
  // 	for (const book of books) {
  // 		addBook(book)
  // 	}
  books.forEach(book => addBookHybrid(book))
}


function addListenerToAddBookForm () {
  formEl.addEventListener('submit', function (event) {
    event.preventDefault()
    const book = {
      title: formEl.title.value,
      description: formEl.desc.value,
      releaseYear:formEl.year.value
    }
    addBookHybrid(book)
  
    formEl.reset()
  })
}

function addListenerToRemoveBooks () {
  document.addEventListener('click', event => {
    if (event.target.className === "delete-btn") {
      const id = event.target.dataset.id
      const rowToDelete = document.querySelector(`#row-${id}`)
      rowToDelete.remove()
    }
  })
}

function initialize () {
  addBooks(books)
  addListenerToAddBookForm()
  addListenerToRemoveBooks()
}

const parentEl = document.querySelector('#parent')
const childEl = document.querySelector('#child')
const grandchildEl = document.querySelector('#grandchild')

parentEl.addEventListener('click', event => {
  debugger
  console.log("I'm the parent!")
})
childEl.addEventListener('click', event => {
  // event.stopPropagation()
  console.log("I'm the child!")
})
grandchildEl.addEventListener('click', event => {
  console.log("I'm the grandchild!")
})

initialize()
