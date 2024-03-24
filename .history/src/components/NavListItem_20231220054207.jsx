import React from 'react'
import

function NavListItem({nav}) {
  return (
    <li><a href={nav.link}>{nav.name}</a></li>
  )
}

export default NavListItem
