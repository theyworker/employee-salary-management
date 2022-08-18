import React from "react";
import { Link } from "react-router-dom";

const Menu = ({handleClose}) => {
  return (
    <div>
        <h2 style={{color: '#fff', padding: '2em'}}>Menu</h2>
      <ul>
        <li>
          <Link to="/" onClick={()=>handleClose()}>Dashboard</Link>
        </li>
        <li>
          <Link to="/upload" onClick={()=>handleClose()}>CSV upload</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
