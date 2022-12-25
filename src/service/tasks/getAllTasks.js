import axios from "axios"

export const getAllTasks = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      const data = res.data
      return data
    })
}