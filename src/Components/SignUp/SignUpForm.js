import React from "react";
import { Bell, Clock, Eye } from "react-feather";
import "./signupform.css";

function SignUpForm() {
  return (
    <div className="signup__containermaster">
      <div className="signup__container">
        <div className="signup__left">
          <p className="signup__leftwhycompte">Pourquoi créer un compte ?</p>
          <div className="signup__text">
            <div className="signup__textone">
              <div>
                <Clock />
              </div>
              <div>
                <p>Gagne du temps</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                  inventore enim maxime quos veniam?
                </p>
              </div>
            </div>
            <div className="signup__textone">
              <div>
                <Bell />
              </div>
              <div>
                <p>Soyez les premiers informés</p>
                <p>
                  repellendus, neque perferendis architecto doloremque magni.
                  Dignissimos nemo accusantium incidunt architecto placeat ipsum
                  distinctio maxime?
                </p>
              </div>
            </div>
            <div className="signup__textone">
              <div>
                <Eye />
              </div>
              <div>
                <p>Visibilité</p>
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
          <div>
            <p>Pseudo*</p>
            <input type="text" />
          </div>
          <div>
            <p>Adresse email*</p>
            <input type="text" />
          </div>
          <div>
            <div>
              <p>Mot de passe*</p>
              <input />
            </div>
            <div>
              <div>
                <p>Confirme le mot de passe*</p>
                <input />
              </div>
            </div>
          </div>
          <div>
            <input type="checkbox" name="" id="" />
            <p>
              J'accepte les condition de vente et les condition Générales
              d'utilisation
            </p>
          </div>
          <div>
            <button>Créer mon Compte Personnel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
