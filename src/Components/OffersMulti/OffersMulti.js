import React, { useState } from "react";

function OffersMulti({ data, loading }) {
  console.log("fuck>>>>", data);

  return (
    <div>
      {loading === true ? (
        <span>Waiting please</span>
      ) : (
        <div>
          {data.offers.map((offer, i) => {
            return <div>{offer.title}</div>;
          })}
        </div>
      )}
    </div>
  );
}

export default OffersMulti;
