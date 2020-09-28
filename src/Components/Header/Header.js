import React from "react";
import "./header.css";
import logo from "../../assests/logo.png";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__containLogo">
          <img className="header__logo" src={logo} alt="logo lbc" />
        </div>

        <button className="header__buttonAdd">Déposer une annonce</button>
        <input type="text" />
      </div>
      <div className="header__right">
        <h5>Se connecter</h5>
      </div>
    </div>
  );
};

export default Header;
