import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./Pages/Offers";
import Offer from "./Pages/Offer";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LogIn from "./Pages/LogIn";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Offers />
          </Route>
          <Route path="/offer/:id" component={Offer} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
