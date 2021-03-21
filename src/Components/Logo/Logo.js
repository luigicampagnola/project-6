import React from "react";
import logo from "./logo.png";
import Tilty from "react-tilty";


const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty
        className="Tilt br2"
        options={{ max: 55 }}
        style={{ height: 250, width: 250 }}
      >
        <div className='Tilt-inner'>
          <img style={{paddingTop: '5px'}} alt='logo' src={logo} />
        </div>
      </Tilty>
      
    </div>
  );
};

export default Logo;
