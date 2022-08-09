import React from "react";
import "./Header.module.css";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg header"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <ul className="navbar-nav mr-auto"></ul>
      <h6>Logo</h6>
    </nav>
  );
};
export default Header;
