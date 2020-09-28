import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Offers from "./Pages/Offers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Offers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
