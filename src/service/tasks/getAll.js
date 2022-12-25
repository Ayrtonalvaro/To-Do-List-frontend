import axios from "axios";

const baseUrl = 'http://localhost:3000/api/tasks'

export const getAll = () => {
  return axios.get(baseUrl).then(res => {
    const data = res.data
    return data
  })
}