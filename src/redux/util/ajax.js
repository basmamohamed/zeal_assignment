const apiHost = 'http://10.0.2.2:3000'

export default {

  login(data) {
    console.log("data",data);
    fetch(apiHost + "/login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(response => response.json())
      .then(json => {
        console.log("json",json)
        return json
      }).catch(error => {
        console.log("error",error);
      })
  },

  register(data) {
    fetch(apiHost + "/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(json => {
        return json
      }).catch(error => {
        console.error(error)
      })
  },

  getUsers() {
    fetch(apiHost + "/user")
      .then(response => response.json())
      .then(json => {
        return json
      }).catch(error => {
        console.error(error)
      })
  },

  getLocations(email = "") {
    fetch(apiHost + "/location/" + email)
      .then(response => response.json())
      .then(json => {
        return json
      }).catch(error => {
        console.error(error)
      })
  },

  deleteLocation(id) {
    fetch(apiHost + "/location/" + id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        return json
      }).catch(error => {
        console.error(error)
      })
  },

  updateUsers(data, method, email = "") {
    fetch(apiHost + "/user" + email, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(json => {
        return json
      }).catch(error => {
        console.error(error)
      })
  }

}

