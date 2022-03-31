
import React from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

function ColorList({colors}) {
  const colorLinks = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));

  return (
    <div className="ColorList">
      
        <h1 className="ColorList-title">Let's Make Some Colors</h1>
        <h2> Click The Link And Get Started </h2>
        <h3><Link to="/colors/new">Make A Color</Link></h3>
        <p>Please select a color.</p>
        <ul>{colorLinks}</ul>
     
    </div>
  );
}

export default ColorList;
