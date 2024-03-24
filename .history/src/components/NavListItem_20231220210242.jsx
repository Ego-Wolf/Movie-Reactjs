import React from 'react'
import './navListItem.css'

function NavListItem({nav, navOnClick}) {
  return (
    <li>
      <a href={nav.link} 
        className={1}
        onClick={() => { 
          navOnClick(nav.id_);
          }}
        >
          {nav.name}
      </a>
    </li>
  )
}

export default NavListItem
