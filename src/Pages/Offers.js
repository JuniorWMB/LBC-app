import React from "react";
import "../App.css";
import Header from "../Components/Header/Header";
import HeaderSearch from "../Components/HeaderSearch";
import OffersMulti from "../Components/OffersMulti/OffersMulti";

const Offers = ({ data, loading }) => {
  return (
    <div>
      <HeaderSearch />
      <OffersMulti data={data} loading={loading} />
    </div>
  );
};

export default Offers;
