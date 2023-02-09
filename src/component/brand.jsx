import React from 'react';
import './StyleBrand.css';
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

function Brand() {
  return (
    <div className="brand-container">
      <h1 className="brand-title">
      808 Controladores 
      </h1>
      <NavLink className="nav-link2" to="/cart">
        <CartWidget />
        </NavLink>
        </div>
  );
}

export default Brand;