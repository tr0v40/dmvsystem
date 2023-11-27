import axios from "axios"

const apiUrl = "http://localhost:3000/api"

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
