
import { useEffect } from 'react'
import { useState } from 'react'

import './App.css'
import Task from './Task'

import { createTask } from './service/tasks/createTask'
import { getAll } from './service/tasks/getAll'
import axios from 'axios'

const tasks = [
  {
    id: 1,
    nameTask: 'Ir al supermercado',
    descriptionTask: 'Compras comida para la noche'
  },
  {
    id: 2,
    nameTask: 'Ensayo sabado',
    descriptionTask: 'Armar listas de canciones para el show'
  },
  {
    id: 3,
    nameTask: 'Repasar nodejs',
    descriptionTask: 'Armar api de tareas'
  }
]

function App() {

  const [tareas, setTareas] = useState([])
  const [nuevaTarea, setNuevaTarea] = useState('')
  
  useEffect(() => {
    axios.get('http://localhost:3001/api/tasks').then(res => {
      const data = res.data;
      setTareas(data)
    })
  },[])

  const handleChange = (event) => {
    console.log(event.target.value)
    setNuevaTarea(event.target.value)
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const tareaToAddState= {
      nameTask: 'nueva tarea',
      descriptionTask: nuevaTarea,
    }
    console.log(tareaToAddState)
    createTask(tareaToAddState).then(nuevaTarea => {
      setTareas((prevTareas) => prevTareas.concat(nuevaTarea))
    }) 
    setNuevaTarea('')
  }
  
  return (
    <div className="App container">
      <div className='position-absolute top-50 start-50 translate-middle'>
        <h1>Lista de tareas</h1>
        <ul>
          {tareas.map(task => (
            <Task key={task.id} nameTask={task.nameTask} descriptionTask={task.descriptionTask} />
          ))}
        </ul>
        <form>
          <input type="text" onChange={handleChange} value={nuevaTarea} placeholder='Tarea...'></input>
          <button onClick={handleSubmit}>Añadir nota</button>
        </form>
      </div>


    </div>
  )
}

export default App
