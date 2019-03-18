class Toy {
  constructor (toy) {
    this.id = toy.id
    this.name = toy.name
    this.image = toy.image
    this.likes = toy.likes
    this.create()
    this.addLikeListener()
  }

  create () {
    this.el = document.createElement('div')
	  this.el.className = 'card'
	  this.el.innerHTML = `
    	<h2>${this.name}</h2>
      <img src="${this.image}" class="toy-avatar" />
      <p class='likes'>${this.likes} Likes</p>
      <button class="like-btn">Like <3</button>
    `
  }

  addLikeListener () {
    const likeBtn = this.el.querySelector('.like-btn')
    likeBtn.addEventListener('click', () => this.increaseLikes())
  }

  changeName (name) {
    // update the page
    this.el.querySelector('h2').innerText = name
    // update the state
    this.name = name
    // update the server
    API.updateToy({ id: this.id, name: this.name })
  }

  increaseLikes () {
    this.likes++

    API.updateToy({ id: this.id, likes: this.likes })
      .then(() => {
        const likes = this.el.querySelector('.likes')
        likes.innerText = `${this.likes} Likes`
      })
  }

  remove () {
    this.el.remove()
  }

}
