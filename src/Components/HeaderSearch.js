import React from "react";

const HeaderSearch = () => {
  return (
    <div className="headersearch__contain">
      <div className="ellipse"></div>
      <div className="headersearch">
        <div className="header__inputandbutton">
          <input
            className="header__input"
            type="text"
            placeholder="Que recherchez-vous ?"
          />
          <button className="header__button">Recherche</button>
        </div>
        <div className="header__price">
          <div className="header__priceleft">
            <p>Prix entre</p>
            <input
              type="text"
              placeholder="prix min"
              className="header__pricevalue"
            />
            <p>et</p>
            <input
              type="text"
              placeholder="prix max"
              className="header__pricevalue"
            />
          </div>
          <div>
            <select
              style={{
                width: "220px",
                height: "32px",
              }}
            >
              <option value="récent ">Tri: Plus récentes </option>
              <option value="ancien">Tri: Plus ancien</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
