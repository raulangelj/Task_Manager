/* eslint-disable import/no-cycle */
import React, { useState, createContext, useEffect } from 'react'
import './App.css'
import Header from '../Components/Header/header'
import TaskForm from '../Components/Form/taskForm'
import TaskList from '../Components/TaskList/taskList'

export const TaskContext = createContext()

const App = () => {
  const loadedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
  const loadedShowDone = localStorage.getItem('showDone') ? localStorage.getItem('showDone') === 'true' : true
  const [tasks, setTasks] = useState(loadedTasks)
  const [showDone, setShowDone] = useState(loadedShowDone)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    localStorage.setItem('showDone', showDone.toString())
  }, [showDone])

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
