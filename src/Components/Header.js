import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Header({ getApodData }) {
  const [date, setdate] = useState();

  var minDate = new Date("02-01-2020");

  async function dateValidator(date) {
    console.log(date);
      setdate(date);

    // if (date < "2020-01-01") {
    //   console.log(date);
    // }
  }

  async function getData() {
    console.log(minDate);
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
            dateValidator(e.target.value);
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
