console.log('Welcome from index.js')

// Full JS version: (yawn)
function addBook (book) {
  // find the parent element: tbody
  const tbodyEl = document.querySelector('tbody')

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
  const tbodyEl = document.querySelector('tbody')
  const trEl = document.createElement('tr')

  trEl.innerHTML = `
    <td>${book.title}</td>
    <td>${book.description}</td>
    <td>${book.releaseYear}</td>
  `
  tbodyEl.append(trEl)
}

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    description: 'Hiss!',
    releaseYear: 1998
  },
  {
    title: 'Lord of the Rings, Fellowship of the Ring',
    description: 'You shall not pass!',
    releaseYear: 1954
  }
]

function addBooks (books) {
  // 	for (const book of books) {
  // 		addBook(book)
  // 	}
  books.forEach(book => addBook(book))
}

addBooks(books)


import { useEffect } from 'react'

const useEventListener = (type, handler) => {
  useEffect(() => {
    YOUR_CONSTRUCT.addEventListener(type, handler)
    return () => YOUR_CONSTRUCT.removeEventListener(handler)
  }, [])
}

export default useEventListener
