import React, { useState, useEffect } from "react";
import OfferContain from "../Components/Offer/OfferContain";
import axios from "axios";
import { useParams } from "react-router-dom";

function Offer() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  console.log("just here to data", data);
  return (
    <div>
      {loading === true ? (
        <span>Wainting...</span>
      ) : (
        <OfferContain
          picture={data.picture.secure_url}
          title={data.title}
          created={data.created}
          price={data.price}
          description={data.description}
          username={data.creator.account.username}
        />
      )}
    </div>
  );
}

export default Offer;
