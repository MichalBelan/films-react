import React from "react";
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Stranka sa nenasla</p>
      <p><Link to={"/"}>Uvodna stranka</Link></p>
    </div>
  );
};

export default Error;
