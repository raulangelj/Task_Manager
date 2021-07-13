import React, { useContext } from 'react'
import { TaskContext } from '../../App/App'
import Task from '../Task/task'
import './taskList.css'

const TaskList = () => {
  const tasks = useContext(TaskContext)

  return (
    <ul className="tasks-list">
      {
        tasks.tasks.length > 0
          ? tasks.tasks.map((task) => {
            if (!tasks.showDone) {
              if (!task.done) {
                return (
                  <Task
                    key={task.id}
                    task={task}
                  />
                )
              }
            } if (tasks.showDone) {
              return (
                <Task
                  key={task.id}
                  task={task}
                />
              )
            }
            return (null)
          })
          : <div className="tasks-list-message">~ No Pending Tasks ~</div>
      }
    </ul>
  )
}

export default TaskList
