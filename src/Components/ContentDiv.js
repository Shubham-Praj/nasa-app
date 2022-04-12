import React from "react";

function ContentDiv() {
  return (
    <div className="content-main-div">
      <div className="content-data-div">
        <div className="picture-title">
          <h2>A Picturesque Equinox Sunset</h2>
        </div>
        <div className="explanation">
          <p>
            What's that at the end of the road? The Sun. Many towns have roads
            that run east - west, and on two days each year, the Sun rises and
            sets right down the middle. Today is one of those days: an equinox.
            Not only is today a day of equal night (\"aequus\"-\"nox\") and day
            time, but also a day when the sun rises precisely to the east and
            sets due west. Featured here is a picturesque road in northwest
            Illinois, USA that runs approximately east -west. The image was
            taken during the March Equinox of 2015, and shows the Sun down the
            road at sunset. In many cultures, this March equinox is taken to be
            the first day of a season, typically spring in Earth's northern
            hemisphere, and autumn in the south. Does your favorite street run
            east - west? Tonight, at sunset, you can find out with a quick
            glance.
          </p>
        </div>
      </div>
      <div className="content-image-div">
        <div className="image">
          <img style={{width : "100%" , height : "100%"}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""/>
        </div>
        <div className="author">
            <h3>adhsalksd</h3>
        </div>
      </div>
    </div>
  );
}

export default ContentDiv;
