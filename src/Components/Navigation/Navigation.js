import React from "react";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <div>
        <p
          className="f3 link dim black underline pa3 pointer content"
          onClick={() => onRouteChange('signout')}
        >
          Sign Out
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <p
          className="f7 link dim black underline pa3 pointer content"
          onClick={() => onRouteChange('signin')}
        >
          Sign In
        </p>
        <p
          className="f7 link dim black underline pa3 pointer content"
          onClick={() => onRouteChange('register')}
        >
          Register
        </p>
      </div>
    );
  }
};

export default Navigation;
