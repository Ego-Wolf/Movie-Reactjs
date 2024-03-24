import React from 'react'
import NavListItem from '../components/NavListItem'

function Header() {
  return (
    <header>
      <a href="#" className="logo">
        Cinema
      </a>
      <ul className="nav">
        <NavListItem name='Home'/>
      </ul>
    </header>
  )
}

export default Header
