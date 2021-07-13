/* eslint-disable import/no-cycle */
import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid'
import { TaskContext } from '../../App/App'
import './taskForm.css'

const TaskForm = () => {
  const tasks = useContext(TaskContext)
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    tasks.setTasks([
      ...tasks.tasks,
      {
        // id: Math.max.apply(Math, tasks.tasks.map((task) => task.id)) + 1,
        id: uuid(),
        text: newTask,
        done: false,
      },
    ])
    setNewTask('')
  }

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-form-input"
        placeholder="Write a task ..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        className="task-form-btn"
      >
        <FontAwesomeIcon icon={faPlusSquare} className="task-form-icon-btn" />
      </button>
    </form>
  )
}

export default TaskForm
