import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import "./publish.css";
import axios from "axios";

function Publish() {
  const [title, setTitle] = useState("Titre");
  const [text, setText] = useState("Texte de l'annonce");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();

  const history = useHistory();
  const token = Cookies.get("token");
  console.log("Token>>>", token);

  const handleTtileChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", text);
    formData.append("price", price);
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://leboncoin-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer" + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("data>>>", response.data);
      history.push("/offer/" + response.data_id);
    } catch (e) {
      console.log("error request", e.message);
    }

    // if (!token) {
    //   alert(
    //     "Vous devez etre connecté pour déposer une annonce, vous allez etre dirigé vers la page login ..."
    //   );
    //   history.push("/login");
    // } else {
    //   const formData = new FormData();
    //   formData.append("title", title);
    //   formData.append("description", text);
    //   formData.append("price", price);
    //   formData.append("file", file);

    //   const response = await axios.post(
    //     "https://leboncoin-api.herokuapp.com/offer/publish",
    //     formData,
    //     {
    //       headers: {
    //         Authorization: "Bearer" + token,
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );
    //   console.log("publish ok", response.data);

    //   history.push(`/`);
    // }
  };
  console.log("title is here>>", title);
  console.log("text is here>>", text);
  console.log("price is here>>", price);
  console.log("price is here>>", file);

  return token ? (
    <div className="container__publish">
      <div className="publish__block">
        <div className="publish__title">
          <h1>Déposer une annonce</h1>
        </div>
        <form action="" className="publish__formblock" onSubmit={handleSubmit}>
          <div className="publish__marginblock">
            <label htmlFor="titre">
              <p>Titre de l'annonce *</p>
            </label>
            <input
              type="text"
              className="publish__inputtitle publish__inputtitlepolice"
              value={title}
              onChange={handleTtileChange}
            />
          </div>
          <div className="publish__marginblock">
            <label htmlFor="text">
              <p>Texte de l'annone *</p>
            </label>
            <textarea
              name=""
              id="text"
              cols="30"
              rows="10"
              className="publish__inputtitlepolice"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="publish__marginblock">
            <label htmlFor="price">
              <p>Prix *</p>
            </label>
            <input
              type="number"
              id="price"
              className="publish__inputtitlepolice"
              value={price}
              onChange={handlePriceChange}
            />
            €
          </div>
          <div className="publish__marginblock">
            <label htmlFor="photo">
              <p>Photo *</p>
            </label>
            <input type="file" id="photo" onChange={handleFileChange} />
          </div>
          <input type="submit" value="Valider" className="publish__buttonsub" />
        </form>
      </div>
    </div>
  ) : (
    <Redirect to="/login" />
  );
}

export default Publish;
