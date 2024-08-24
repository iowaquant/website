import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <dvi className="navbar-container">
          <Link to="/" className="navbar-logo">
            TRVL
          </Link>
        </dvi>
      </nav>
    </>
  );
}

export default Navbar;
