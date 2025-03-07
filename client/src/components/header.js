import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
const Header = (props) => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
      <GoogleAuth></GoogleAuth>
    </div>
  );
};
export default Header;
