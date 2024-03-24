import React from 'react'
import './navListItem.css'

function NavListItem({nav, navOnClick}) {
  return (
    <li><a href={nav.link}>{nav.name}</a></li>
  )
}

export default NavListItem
