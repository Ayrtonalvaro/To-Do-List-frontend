import axios from "axios";

export const createTask = ({ nameTask, descriptionTask} ) => {
  return axios.post('http://localhost:3001/api/tasks',nameTask, descriptionTask)
    .then(res => {
      const data = res
      return data
    })
}