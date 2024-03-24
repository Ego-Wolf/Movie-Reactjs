import React from 'react'
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';

function Header() {
  return (
    <header>
      <a href="#" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {
            navListData.map(nav=>(
                <NavListItem nav/>
            ))
        }
      </ul>
    </header>
  )
}

export default Header
