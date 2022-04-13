import React from "react";

function ContentDiv({data}) {

  console.log("Content div data :- " , data);

  return (
    <div className="content-main-div">
      <div className="content-data-div">
        <div className="picture-title">
          <h2>{data.title}</h2>
        </div>
        <div className="explanation">
          <p>
            {data.explanation}
          </p>
        </div>
      </div>
      <div className="content-image-div">
        <div className="image-div">
          <img className="image" src={ data.url || data.hdurl} alt=""/>
        </div>
        <div className="author-div">
            <h3>{data.copyright}</h3>
        </div>
      </div>
    </div>
  );
}

export default ContentDiv;
