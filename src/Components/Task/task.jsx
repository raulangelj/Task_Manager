/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckSquare, faSquare, faEdit, faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { TaskContext } from '../../App/App'
import './task.css'

const Task = ({ task }) => {
  const tasks = useContext(TaskContext)
  const [editTask, setEditTask] = useState(false)
  const [updateTask, setUpdateTask] = useState(task.text)

  const handleSubmit = (e) => {
    e.preventDefault()

    setEditTask(false)
    tasks.setTasks(tasks.tasks.map((t) => (
      t.id === task.id ? ({ ...t, text: updateTask }) : (t)
    )))
  }

  const doneTask = (id) => {
    tasks.setTasks(tasks.tasks.map((t) => (
      t.id === id ? ({ ...t, done: !t.done }) : (t)
    )))
  }

  const deleteTask = () => {
    tasks.setTasks(tasks.tasks.filter((t) => t.id !== task.id))
  }

  return (
    <li key={task.id} className="tasks-list-task">
      <FontAwesomeIcon
        icon={task.done ? faCheckSquare : faSquare}
        className="task-list-icon tasks-list-icon-check"
        onClick={() => doneTask(task.id)}
      />
      <div className="task-list-text">
        {
          editTask
            ? (
              <form action="" className="edit-task-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="edit-task-form-input"
                  onChange={(e) => setUpdateTask(e.target.value)}
                  value={updateTask}
                />
                <button
                  type="submit"
                  className="edit-task-form-btn"
                >
                  Update
                </button>
              </form>
            )
            : task.text
        }
      </div>
      <div className="tasks-list-btn-container">
        <FontAwesomeIcon
          icon={faEdit}
          className="task-list-icon tasks-list-icon-action"
          onClick={() => setEditTask(!editTask)}
        />
        <FontAwesomeIcon
          icon={faTimes}
          className="task-list-icon tasks-list-icon-action"
          onClick={deleteTask}
        />
      </div>
    </li>
  )
}

export default Task
