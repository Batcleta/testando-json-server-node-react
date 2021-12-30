import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
          <i className="fa fa-home"></i> Inicio
        </Link>
        <Link to="/users">
          <i className="fa fa-users"></i> Usuários
        </Link>
      </nav>
    </aside>
  );
}

export default Nav;
