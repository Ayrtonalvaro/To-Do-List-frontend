import React from 'react'

const Task = ({ nameTask, descriptionTask}) => {
  return (
    <div>
      <li >
        <h4>{nameTask}</h4>
        <p>{descriptionTask}</p>
      </li>
    </div>
  )
}

export default Task
