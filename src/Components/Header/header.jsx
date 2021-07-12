/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import './header.css'

const Header = () => {
  const [eye, setEye] = useState('faEye')

  return (
    <header className="header">
      <h1 className="header-title">Lista de Tareas</h1>
      <button type="button" className="header-button">
        No mostrar completadas
        <FontAwesomeIcon icon={faEyeSlash} className="header-icon-button" />
      </button>
    </header>
  )
}

export default Header
