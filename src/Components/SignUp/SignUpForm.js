import React from "react";
import { Bell, Clock, Eye } from "react-feather";
import Button from "../Outils/Button";
import "./signupform.css";

function SignUpForm() {
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
          <form className="signup__form">
            <div>
              <p className="signup__formlabel">Pseudo*</p>

              <input className="signup__inputtext" type="text" />
            </div>
            <div>
              <p className="signup__formlabel">Adresse email*</p>
              <input className="signup__inputtext" type="text" />
            </div>
            <div className="signup__formmdp">
              <div>
                <p className="signup__formlabel">Mot de passe*</p>
                <input className="signup__inputmdp" />
              </div>
              <div>
                <div>
                  <p className="signup__formlabel">Confirme le mot de passe*</p>
                  <input className="signup__inputmdp" />
                </div>
              </div>
            </div>
            <div className="signup__checkbox">
              <input type="checkbox" name="" id="" />
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
