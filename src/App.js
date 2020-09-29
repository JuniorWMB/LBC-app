import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./Pages/Offers";
import "./App.css";

function App() {
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
  // console.log("good", data.offers);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Offers data={data.offers} loading={loading} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
