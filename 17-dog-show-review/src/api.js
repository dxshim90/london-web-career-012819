class API {
  static init () {
    this.baseUrl = 'http://localhost:3000'
    this.dogsUrl = this.baseUrl + '/dogs'
  }

  // get all the dogs
  static getDogs () {
    return this.get(this.dogsUrl)
  }

  // get a single dog?
  static getDog (id) {
    return this.get(this.dogsUrl + `/${id}`)
  }

  // update a dog
  static updateDog (dog) {
    return this.patch(this.dogsUrl + `/${dog.id}`, dog)
  }

  // abstract get request
  static get (url) {
    return fetch(url)
      .then(resp => resp.json())
  }

  // abstract patch request
  static patch (url, data) {
    return fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
  }
}

API.init()
