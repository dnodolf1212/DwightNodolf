class ApiService {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  getBlogs = (data) => {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Aceept": "application/json",
      },
      body: JSON.stringify(data)
    };
    return fetch()
  }

}