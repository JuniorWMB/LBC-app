import React, { useState } from "react";
import axios from "axios";

const HeaderSearch = ({ setData, title, setTitle }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [select, setSelect] = useState({ value: "date-asc" });

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    const params = {
      title: title,
      minPrice,
      maxPrice,
      sort: select,
    };
    if (!minPrice) {
      delete params.minPrice;
    }
    if (!maxPrice) {
      delete params.maxPrice;
    }
    if (!select) {
      delete params.select;
    }

    const queryString = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");

    const response = await axios.get(
      "https://leboncoin-api.herokuapp.com/offer/with-count?" + queryString
    );
    setData(response.data);
  };

  return (
    <div className="headersearch__contain">
      <div className="ellipse"></div>
      <form className="headersearch" onSubmit={handleSearchSubmit}>
        <div className="header__inputandbutton">
          <input
            className="header__input"
            type="text"
            placeholder="Que recherchez-vous ?"
            onChange={handleTitleChange}
          />
          <button type="submit" className="header__button">
            Recherche
          </button>
        </div>
        <div className="header__price">
          <div className="header__priceleft">
            <p>Prix entre</p>
            <input
              type="text"
              placeholder="prix min"
              className="header__pricevalue"
              onChange={handleMinPriceChange}
            />
            <p>et</p>
            <input
              type="text"
              placeholder="prix max"
              className="header__pricevalue"
              onChange={handleMaxPriceChange}
            />
          </div>
          <div>
            <select
              style={{
                width: "220px",
                height: "32px",
              }}
              onChange={handleSelectChange}
            >
              <option value="price-desc">tri : Plus cher</option>
              <option value="price-asc">tri : Moins cher</option>
              <option value="date-desc">tri : Plus récentes</option>
              <option value="date-asc">tri : Plus anciens</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HeaderSearch;
