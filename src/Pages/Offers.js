import React from "react";
import "../App.css";
import HeaderSearch from "../Components/HeaderSearch";
import OffersMulti from "../Components/OffersMulti/OffersMulti";

const Offers = ({ data, loading }) => {
  return (
    <div>
      <OffersMulti data={data} loading={loading} />
    </div>
  );
};

export default Offers;
