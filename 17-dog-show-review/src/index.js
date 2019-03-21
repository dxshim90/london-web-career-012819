// get the current elements on the page
const formEl = document.querySelector('#dog-form')
const tableEl = document.querySelector('#table-body')

const state = {
  selectedDog: null,
  dogs: []
}

// add a single row to the page
const addDogRow = dog => {
	const {name, breed, sex} = dog
	const rowEl = document.createElement('tr')
  rowEl.dataset.id = dog.id
	rowEl.innerHTML = `
    <td class='name'>${name}</td>
    <td class='breed'>${breed}</td>
    <td class='sex'>${sex}</td>
    <td><button class='edit'>Edit</button></td>
	`
  const editBtn = rowEl.querySelector('.edit')
  editBtn.addEventListener('click', () => selectDog(dog))
	tableEl.appendChild(rowEl)
}

// add multiple rows
const addDogRows = dogs => dogs.forEach(addDogRow)

// listen for dog edit clicks
const selectDog = dog => {
  state.selectedDog = dog
  const { name, breed, sex } = state.selectedDog

  formEl.name.value = name
  formEl.breed.value = breed
  formEl.sex.value = sex
}

// listen for form submission
function listenForDogSubmission () {
  formEl.addEventListener('submit', event => {
    event.preventDefault()

    // update out 3 pieces: state, server, page
    // state:
    state.selectedDog.name = formEl.name.value
    state.selectedDog.breed = formEl.breed.value
    state.selectedDog.sex = formEl.sex.value

    // server:
    API.updateDog(state.selectedDog)
    // page (conditionally) :
      .then(dog => {
        updateSelectedDogRow()
      })

  })
}

// update the page with the new dog info
// this clears the whole table and recreates it from state
const updateTable = () => {
	tableEl.innerHTML = ''
	addDogRows(state.dogs)
}

// update a single row on the page
const updateSelectedDogRow = () => {
  const {id, name, sex, breed} = state.selectedDog

  const rowEl = document.querySelector(`[data-id="${id}"]`)
  const nameEl = rowEl.querySelector('.name')
  const breedEl = rowEl.querySelector('.breed')
  const sexEl = rowEl.querySelector('.sex')
  
  nameEl.innerText = name
  breedEl.innerText = breed
  sexEl.innerText = sex
}

// do this when the page loads
const initialize = function () {
   API.getDogs()
    .then(dogs => {
      state.dogs = dogs
      addDogRows(state.dogs)
    })
    listenForDogSubmission()
}


initialize()
