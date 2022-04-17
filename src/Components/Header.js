import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Header({ getApodData }) {
  const [date, setdate] = useState();

  async function showDate(seletedDate) {
    setdate(seletedDate);
  }

  async function getData() {
    getApodData(date);
  }

  return (
    <div className="header-outer-div">
      <h1 className="title">A PICTURE OF DAY</h1>
      <div className="search-div">
        <input
          className="date-input"
          type="date"
          onChange={(e) => {
            showDate(e.target.value);
          }}
        />
        <Button className="search-button" variant="danger" onClick={getData}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default Header;
