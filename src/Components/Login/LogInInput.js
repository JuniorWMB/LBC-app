import React from "react";
import { Link } from "react-router-dom";
import "./logininput.css";

function LogInInput() {
  return (
    <div className="login__containermaster">
      <div className="login__container">
        <div className="login__title">
          <h1>Connexion</h1>
        </div>
        <form className="login__containerform" action="">
          <div className="login__email">
            <p>Adresse email</p>
            <input className="login__input" type="text" />
          </div>
          <div className="login__mdp">
            <p>Mot de passe</p>
            <input className="login__input" type="text" />
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
