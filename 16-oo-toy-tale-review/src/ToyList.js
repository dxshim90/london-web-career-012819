class ToyList {
  constructor () {
    this.toys = []
    this.list = document.querySelector('#toy-collection')
  }

  addToy (toy) {
    const toyObj = new Toy(toy)
    this.toys.push(toyObj)
    this.list.appendChild(toyObj.el)
  }

  addToys (toys) {
    for (const toy of toys) {
      this.addToy(toy)
    }
  }

  remove (id) {
    const foundToy = this.toys.find(toy => toy.id === id)
    if (foundToy) {
      foundToy.remove()
      this.toys = this.toys.filter(toy => toy.id !== foundToy.id)
    }
  }

}

