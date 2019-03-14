const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const mainEl = document.querySelector('main')

// add a single card
function addCard(trainer) {
  const cardEl = document.createElement('div')
  cardEl.classList.add("card")
  cardEl.dataset.id = trainer.id

  const pokemonsHTML = trainer.pokemons.map(pokemon =>
    `
			<li id="pokemon-${pokemon.id}">${pokemon.nickname} (${pokemon.species})
				<button class="release" data-pokemon-id="${pokemon.id}">Release</button>
			</li>
		`
  ).join('')

  cardEl.innerHTML = `
	  <p>${trainer.name}</p>
      <button class='create' data-trainer-id="${trainer.id}">Add Pokemon</button>
      <ul>
		${ pokemonsHTML}
      </ul>
  `
  
  const createBtn = cardEl.querySelector('.create')
  const ulEl = cardEl.querySelector('ul')
  createBtn.addEventListener('click', () => {
    createPokemon(trainer.id)
      .then(pokemon => {
        if (pokemon.error) return 
        ulEl.innerHTML += `
          <li id="pokemon-${pokemon.id}">${pokemon.nickname} (${pokemon.species})
            <button class="release" data-pokemon-id="${pokemon.id}">Release</button>
          </li>
        `
      })
    
  })

  mainEl.appendChild(cardEl)
}

// add multiple cards
function addCards(trainers) {
  trainers.forEach(addCard)
}

// listen to release buttons on the page being clicked
function addPokemonRemoverLister () {
  document.addEventListener('click', event => {
    if (event.target.classList.contains('release')) {
      const id = event.target.dataset.pokemonId
      const liEl = document.querySelector(`#pokemon-${id}`)
      deletePokemon(id)
        .then(() => {
          liEl.remove()
        })
        .catch(() => alert("Didn't work. Try again later!"))
    }
  })
}

// what happens when the page loads
function initialize () {
  getTrainers()
    .then(addCards)
  addPokemonRemoverLister()
}

// server stuff

// get trainers
function getTrainers () {
  return fetch(TRAINERS_URL)
      .then(resp => resp.json())
}

// create a pokemon
function createPokemon (trainerId) {
  return fetch(POKEMONS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ trainer_id: trainerId })
  }).then(resp => resp.json())
}

// release pokemon on server
function deletePokemon (pokemonId) {
	return fetch(POKEMONS_URL + `/${pokemonId}`, {
		method: 'DELETE'
	}).then(resp => resp.json())
}

initialize()
