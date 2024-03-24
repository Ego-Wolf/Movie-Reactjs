import React from 'react'
import './navListItem.css'

function NavListItem({nav, navOnClick}) {
  return (
    <li><a href={nav.link} onClick={()=>{navOnClick}}>{nav.name}</a></li>
  )
}

export default NavListItem
