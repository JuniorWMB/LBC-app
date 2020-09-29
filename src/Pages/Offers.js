import React from "react";
import "../App.css";
import Header from "../Components/Header/Header";
import HeaderSearch from "../Components/HeaderSearch";
import OffersMulti from "../Components/OffersMulti/OffersMulti";

const Offers = ({ data }) => {
  return (
    <div>
      <Header />
      <HeaderSearch />
      <OffersMulti data={data} />
    </div>
  );
};

export default Offers;
