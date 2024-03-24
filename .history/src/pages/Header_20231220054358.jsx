import React from 'react'
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import './Header.css'

function Header() {
  return (
    <header>
      <a href="#" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {.map(nav=>(
                <NavListItem key={nav._id} nav={nav}/>
            ))
        }
      </ul>
    </header>
  )
}

export default Header
