class API {
  static init() {
    this.baseUrl = 'http://localhost:3000'
    this.toysUrl = this.baseUrl + '/toys'
  }

  // get toys from server
  static getToys () {
    return this.get(this.toysUrl)
  }

  // create toy on server
  static createToy (toy) {
    return this.post(this.toysUrl, toy)
  }

  // update a toy on the server
  static updateToy (toy) {
    return this.patch(this.toysUrl + `/${toy.id}`, toy)
  }

  static get (url) {
    return fetch(url)
      .then(resp => resp.json())
  }

  static post (url, data) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
  }

  static patch (url, data) {
    return fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(resp => resp.json())
  }
}

API.init()
