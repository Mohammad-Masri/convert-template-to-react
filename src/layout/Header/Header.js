import React from "react";
import "./Header.module.css";

const Header = () => {
  return (
    <nav
      class="navbar navbar-expand-lg header"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <ul class="navbar-nav mr-auto"></ul>
      <h6>Logo</h6>
    </nav>
  );
};
export default Header;
