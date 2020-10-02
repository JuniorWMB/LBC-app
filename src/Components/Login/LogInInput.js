import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import Cookies from "js-cookie";
import axios from "axios";
import "./logininput.css";

function LogInInput({ onLogin }) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // if (email && password) {
    //   const response = await axios.post(
    //     `https://leboncoin-api.herokuapp.com/user/log_in`,
    //     {
    //       email,
    //       password,
    //     }
    //   );
    //   Cookies.set("token", response.data.token, { expires: 7 });
    //   onLogin(response.data.token);
    // } else {
    //   setError("Veuiller remplir l'email et le password");
    // }
    // console.log("test submit");
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        onLogin(response.data.token);
        history.pushState("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login__containermaster">
      <div className="login__container">
        <div className="login__title">
          <h1>Connexion</h1>
        </div>
        <form className="login__containerform" onSubmit={handleSubmit}>
          <div className="login__email">
            <p>Adresse email</p>
            <input
              className="login__input"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="login__mdp">
            <p>Mot de passe</p>
            <input
              className="login__input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p>{error}</p>}
          <button className="login__button" type="submit">
            Se connecter
          </button>
        </form>
        <div className="create__account">
          <p>Vous n'avez pas de compte ?</p>
          <Link to="/signup" className="create__accountlink">
            <p>Créer un compte</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogInInput;
