import axios, { AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
}

const api = axios.create(config)

export default api
