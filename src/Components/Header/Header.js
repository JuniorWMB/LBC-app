import React from "react";
import { PlusSquare, User, Search } from "react-feather";
import "./header.css";
import logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="contain__header">
      <div className="header">
        <div className="header__left">
          <Link to="/">
            <div className="header__containLogo">
              <img className="header__logo" src={logo} alt="logo lbc" />
            </div>
          </Link>
          <button
            className="header__buttonAdd"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <PlusSquare color="white" />
            <p style={{ marginLeft: "10px" }}>Déposer une annonce</p>
          </button>
          <div style={{ display: "flex", margin: "20px" }}>
            <Search />
            <input
              style={{ border: "none", marginLeft: "10px" }}
              type="text"
              placeholder="Rechercher"
            />
          </div>
        </div>

        <div
          className="header__right"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <User />
          <Link to="/signup">Se connecter</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
