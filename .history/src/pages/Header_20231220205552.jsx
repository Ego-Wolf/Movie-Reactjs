import React from 'react'
import NavListItem from '../components/NavListItem';
import navListData from '../data/navListData';
import './Header.css'
import Search from '../components/Search';
import Button from '../components/Button';

function Header({ scroll }) {
  
  return (
    <header className={`${scroll>100 ? 'scrolled' : undefined}`}>
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
      <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="sign in"/>
    </header>
  )
}

export default Header
