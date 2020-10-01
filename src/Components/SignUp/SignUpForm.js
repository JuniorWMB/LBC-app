import React, { useState } from "react";
import { Bell, Clock, Eye } from "react-feather";
import Button from "../Outils/Button";
import axios from "axios";
import "./signupform.css";
import { useHistory } from "react-router-dom";

function SignUpForm() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(false);
  const [errorCheck, setErrorCheck] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleCheckChange = () => {
    setCheck(!check);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorPassword("Les mots de passe ne sont pas identiques");
    } else {
      if (check !== true) {
        setErrorCheck(" ");
      } else {
        await axios.post(` https://leboncoin-api.herokuapp.com/user/sign_up`, {
          username: username,
          email: email,
          password: password,
        });
        history.push("/login");
      }
    }
  };
  return (
    <div className="signup__containermaster">
      <div className="signup__container">
        <div className="signup__left">
          <p className="signup__leftwhycompte">Pourquoi créer un compte ?</p>
          <div className="signup__text">
            <div className="signup__textone">
              <div className="signup__icon">
                <Clock size={40} />
              </div>
              <div>
                <p className="signup__title">Gagne du temps</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  inventore enim maxime quos veniam?
                </p>
              </div>
            </div>
            <div className="signup__textone">
              <div className="signup__icon">
                <Bell size={40} />
              </div>
              <div>
                <p className="signup__title">Soyez les premiers informés</p>
                <p>
                  repellendus, neque perferendis architecto doloremque magni.
                  Dignissimos nemo accusantium incidunt architecto placeat ipsum
                  distinctio maxime?
                </p>
              </div>
            </div>
            <div className="signup__textone">
              <div className="signup__icon">
                <Eye size={40} />
              </div>
              <div>
                <p className="signup__title">Visibilité</p>
                <p>
                  magni. Dignissimos nemo accusantium incidunt architecto
                  placeat ipsum distinctio maxime?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="signup__right">
          <div className="signup__compte">
            <p>Créez un compte</p>
          </div>
          <form className="signup__form" onSubmit={handleSubmit}>
            <div>
              <p className="signup__formlabel">Pseudo*</p>

              <input
                className="signup__inputtext"
                type="text"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <p className="signup__formlabel">Adresse email*</p>
              <input
                className="signup__inputtext"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="signup__formmdp">
              <div>
                <p className="signup__formlabel">Mot de passe*</p>
                <input
                  className="signup__inputmdp"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div>
                <div>
                  <p className="signup__formlabel">Confirme le mot de passe*</p>
                  <input
                    className="signup__inputmdp"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
              </div>
            </div>
            {errorPassword && <p className="error">{errorPassword} </p>}
            <div className="signup__checkbox">
              <input
                type="checkbox"
                name=""
                id=""
                onChange={handleCheckChange}
              />
              <div className="signup__textloi">
                <p style={{ marginLeft: "10px" }}>
                  J'accepte les
                  <p className="signup__colorbluetext">
                    {" "}
                    condition de vente
                  </p>{" "}
                  et
                  <p className="signup__colorbluetext">
                    les condition Générales d'utilisation
                  </p>
                </p>
              </div>
            </div>
            <div>
              <Button />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
