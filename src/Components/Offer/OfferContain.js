import React from "react";
import { ShoppingCart } from "react-feather";
import "./offerContain.css";

function OfferContain({
  picture,
  title,
  created,
  price,
  description,
  username,
}) {
  return (
    <div className="offer__container">
      <div className="offer__containLeft">
        <div className="offer__block">
          <img src={picture} alt={title} />
          <div className="offer__text">
            <div className="offer__police">
              <p>{title}</p>
              <h4>{price} €</h4>
            </div>
            <div className="offer__created">
              <p>{created}</p>
            </div>
          </div>
        </div>
        <div className="offer__description">
          <h3>Description</h3>
          <p>{description} </p>
        </div>
      </div>
      <div className="offer__basket">
        <div className="offer__user">
          <p>{username}</p>
        </div>
        <div className="offer__paybasket">
          <button>
            <ShoppingCart size={20} />
            <p className="offer__textBasket">Acheter</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OfferContain;
