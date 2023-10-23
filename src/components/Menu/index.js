import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Menu = () => {
  return (
    <ul className="topbar__menu">
      <li>
        <Link to="/colors">Busca Color</Link>
      </li>
      <li>
        <Link to="/formulas">Añadir Fórmula</Link>
      </li>
      <li>
        <Link to="/clients">
        Clientes
        </Link>
      </li>
    </ul>
  )
}

export default Menu
