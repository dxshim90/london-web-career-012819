const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
const newToyForm = document.querySelector('.add-toy-form')
const toyCollection = document.querySelector('#toy-collection')
const TOYS_URL = 'http://localhost:3000/toys'
let addToy = false

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

// add a single toy to the page
function addCard (toy) {
	const toyEl = document.createElement('div')
	toyEl.className = 'card'
	toyEl.innerHTML = `
    	<h2>${toy.name}</h2>
        <img src="${toy.image}" class="toy-avatar" />
        <p class='likes'>${toy.likes} Likes</p>
        <button class="like-btn">Like <3</button>
  `
  
  const likeBtn = toyEl.querySelector('.like-btn')
  const likes = toyEl.querySelector('.likes')

  likeBtn.addEventListener('click', () => {
    likes.innerText = `${++toy.likes} Likes`
    updateToy(toy)
  })

	toyCollection.appendChild(toyEl)
}

// add multiple toys to the page
function addCards (cards) {
	cards.forEach(addCard)
}

// create a toy on form submission
function addToyFormListener () {
  newToyForm.addEventListener('submit', event => {
    event.preventDefault()

    const toy = {
      name: newToyForm.name.value,
      image:newToyForm.image.value,
      likes: 0
    }
    
    createToy(toy)
      .then(addCard)

    newToyForm.reset()
  })
}

// get toys from server
function getToys () {
	return fetch(TOYS_URL)
		.then(resp => resp.json())
}

// create toy on server
function createToy (toy) {
  return fetch(TOYS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toy)
  }).then(resp => resp.json())
}

// update a toy on the server
function updateToy (toy) {
  return fetch(TOYS_URL + `/${toy.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toy)
  }).then(resp => resp.json())
}

function initialize () {
  getToys()
    .then(addCards)
  
  addToyFormListener()
}

initialize()
