import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./Pages/Offers";
import Offer from "./Pages/Offer";
import Header from "./Components/Header/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/">
            <Offers />
          </Route>
          <Route path="/offer" component={Offer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
