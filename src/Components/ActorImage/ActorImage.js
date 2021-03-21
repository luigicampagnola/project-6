import React from "react";
import './ActorImage.css';


const ActorImage = ({ imgUrl, nameDetected }) => {
  return (
    <div className="center ma">
      <div className='absolute mt2'>
        <img alt="" src={imgUrl} width='500px' height='auto' className='grow mt5'/>
        <p className='header-font center f2 f1-l fw2 white-90 mb0 lh-title'>{nameDetected}</p>
      </div>
    </div>
  );
};


export default ActorImage;