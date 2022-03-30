import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <div className="header-outer-div">
        <h1 className="title">A PICTURE OF DAY</h1>
        <div className="search-div">
          <input className="date-input" type="date"/>
          <Button className="search-button" variant="danger" >Search</Button>
        </div>

    </div>
  )
}

export default Header