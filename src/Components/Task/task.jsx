/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import './task.css'

const Task = ({ task, key }) => {
  const a = 12

  return (
    <li key={key} className="tasks-list-task">
      <FontAwesomeIcon
        icon={faCheckSquare}
        className="task-list-icon tasks-list-icon-check"
      />
      <div className="task-list-text">
        {task.text}
      </div>
      <div className="tasks-list-btn-container">
        <FontAwesomeIcon
          icon={faEdit}
          className="task-list-icon tasks-list-icon-action"
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="task-list-icon tasks-list-icon-action"
        />
      </div>
    </li>
  )
}

export default Task
