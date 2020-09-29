import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./offersMulti.css";

function OffersMulti() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/with-count"
      );
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  console.log("good", data.offers);

  return (
    <div>
      {loading === true ? (
        <span>Waiting please</span>
      ) : (
        <div className="offers">
          {data.offers.map((offer) => {
            return (
              <Link
                to={"/offer/" + offer._id}
                className="offers__multi"
                key={offer._id}
              >
                <img src={offer.picture.url} alt={offer.title} />
                <div className="offers__text">
                  <p className="offers__title">{offer.title}</p>
                  <p className="offers__price">{offer.price} €</p>
                  <div className="offers__created">
                    <p className="offers__created">{offer.created} </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default OffersMulti;
