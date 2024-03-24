import React from 'react'
import './footerNavItem.css'


function FooterNavItem() {
  return (
    <li>
        <ion-icon name="chevron-forward-outline"></ion-icon>{' '}
        <a href="#">{name}</a>
    </li>
  )
}

export default FooterNavItem
