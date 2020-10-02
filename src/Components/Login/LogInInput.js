import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./logininput.css";

function LogInInput() {
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
    e.preventDefault();
    const response = await axios.post(
      `https://leboncoin-api.herokuapp.com/user/log_in`,
      {
        email,
        password,
      }
    );
    Cookies.set("token", response.data.token, { expires: 7 });
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
