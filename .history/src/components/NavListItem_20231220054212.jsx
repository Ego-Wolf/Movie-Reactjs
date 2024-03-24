import React from 'react'
import './NavListItem'

function NavListItem({nav}) {
  return (
    <li><a href={nav.link}>{nav.name}</a></li>
  )
}

export default NavListItem
