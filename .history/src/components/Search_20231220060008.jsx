import React from 'react'
import './search.css'

function Search() {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <ion-icon name="search-outline"></ion-icon>
      {/* <i class='bx bx-search'></i> */}
    </div>
  )
}

export default Search
