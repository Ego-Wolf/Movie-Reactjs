import React from 'react'
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import './Header.css'
import Search from '../components/Search';

function Header() {
  return (
    <header>
      <a href="#" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {
            navListData.map(nav=>(
                <NavListItem key={nav._id} nav={nav}/>
            ))
        }
      </ul>
      <Search/>
      <button icon={<ion-icon name="log-in-outline"></ion-icon>} name='Sign in'/>
    </header>
  )
}

export default Header
