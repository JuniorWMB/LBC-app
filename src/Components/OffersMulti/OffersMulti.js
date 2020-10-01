import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./offersMulti.css";
import Pagination from "../Pagination/Pagination";

function OffersMulti() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/with-count?page=${page}&limit=${limit}`
      );
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, [page]);
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
                key={offer._id}
                to={"/offer/" + offer._id}
                className="offers__multi"
              >
                <img src={offer.picture.secure_url} alt={offer.title} />
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
      <Pagination count={data.count} limit={limit} setPage={setPage} />
    </div>
  );
}

export default OffersMulti;
