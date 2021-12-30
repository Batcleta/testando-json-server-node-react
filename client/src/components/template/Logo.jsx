import React from "react";
import "./Logo.css";
import logoImage from "../../assets/images/logo-entrega-hoje.png";

const Logo = () => {
  return (
    <aside className="logo">
      <a href="/" className="logo">
        <img src={logoImage} alt="logo" />
      </a>
    </aside>
  );
};

export default Logo;
