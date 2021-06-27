import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/granola">
        Granola
      </NavLink>
      <NavLink exact to="/candy">
        Candy
      </NavLink>
      <NavLink exact to="/fruit">
        Fruit
      </NavLink>
    </nav>
  );
}

export default NavBar;