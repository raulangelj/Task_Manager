/* eslint-disable import/no-cycle */
import React, { useState, createContext } from 'react'
import './App.css'
import Header from '../Components/Header/header'
import TaskForm from '../Components/Form/taskForm'
import TaskList from '../Components/TaskList/taskList'

export const TaskContext = createContext()

const App = () => {
  const [tasks, setTasks] = useState([])
  const [showDone, setShowDone] = useState(true)

  return (
    <TaskContext.Provider value={{
      tasks, setTasks, showDone, setShowDone,
    }}
    >
      <div className="contenedor">
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TaskContext.Provider>
  )
}
export default App
