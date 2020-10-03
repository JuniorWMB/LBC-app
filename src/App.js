import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./Pages/Offers";
import Offer from "./Pages/Offer";
import SignUp from "./Pages/SignUp";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LogIn from "./Pages/LogIn";
import Cookies from "js-cookie";

import "./App.css";

function App() {
  // const [token, setToken] = useState(Cookies.get("token") || null);
  // const onLogin = (token) => {
  //   setToken(token);
  //   Cookies.set("token", token);
  // };
  const onLog = (token, username) => {
    Cookies.set("token", token);
    Cookies.set("username", username);
  };

  console.log("humm cookies >>>", onLog);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Offers />
          </Route>
          <Route path="/offer/:id" component={Offer} />
          <Route path="/signup">
            <SignUp onLog={onLog} />
          </Route>
          <Route path="/login">
            <LogIn onLog={onLog} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
