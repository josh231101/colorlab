import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Menu = () => {
  return (
    <ul className="topbar__menu">
      <li>
        <Link to="/users">
        Usuarios
        </Link>
      </li>
      <li>
        <Link to="/products">Códigos</Link>
      </li>
      <li>
        <Link to="/admins">Administradores</Link>
      </li>
    </ul>
  )
}

export default Menu
