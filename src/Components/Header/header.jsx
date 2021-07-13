/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { TaskContext } from '../../App/App'
import './header.css'

const Header = () => {
  const tasks = useContext(TaskContext)
  const [eye, setEye] = useState('faEye')

  return (
    <header className="header">
      <h1 className="header-title">Lista de Tareas</h1>
      <button
        type="button"
        className="header-button"
        onClick={() => {
          tasks.setShowDone(!tasks.showDone)
        }}
      >
        {tasks.showDone ? 'No mostrar completadas' : 'Mostrar todo' }
        <FontAwesomeIcon icon={tasks.showDone ? faEyeSlash : faEye} className="header-icon-button" />
      </button>
    </header>
  )
}

export default Header
