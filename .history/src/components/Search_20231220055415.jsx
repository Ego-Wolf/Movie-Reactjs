import React from 'react'
import './search.css'

function Search() {
  return (
    <div className='search'>
      <input type="text" placeholder='Search' />
      <icon-icon name="search-outline"></icon-icon>
    </div>
  )
}

export default Search
