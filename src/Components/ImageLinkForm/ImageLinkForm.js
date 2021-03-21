import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onClickHandler }) => {
  return (
    <div>
      <div className="center">
        <div className="center form pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          ></input>
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-blue"
            onClick={onClickHandler}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
