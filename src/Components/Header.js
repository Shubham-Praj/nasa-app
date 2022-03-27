import React from 'react'

function Header() {
  return (
    <div className="header-outer-div">
        <h1 className="title">A PICTURE OF DAY</h1>
        <div className="search-div">
          <input type="date"/>
          <button>Search</button>
        </div>

    </div>
  )
}

export default Header