import React from "react";

function OfferContain({ picture, title, created, price }) {
  return (
    <div>
      <img src={picture} alt={title} />
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <div>
          <p>{created}</p>
        </div>
      </div>
    </div>
  );
}

export default OfferContain;
