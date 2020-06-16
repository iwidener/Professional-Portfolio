import React from "react";
import "./style.css";
import "./bee.jpg";

function Photo(props) {
  return (
    <div className="photo" backgroundimage="./bee.jpg">
      {props.children}
    </div>
  );
}

export default Photo;
