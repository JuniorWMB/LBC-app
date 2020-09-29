import Axios from "axios";
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
  return (
    <div>
      <OfferContain />
    </div>
  );
}

export default Offer;
