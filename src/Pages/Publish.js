import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import "./publish.css";
import axios from "axios";

function Publish() {
  const [title, setTitle] = useState("Titre");
  const [text, setText] = useState("Texte de l'annonce");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();
  const userToken = Cookies.get("token");
  const history = useHistory();

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
    if (!userToken) {
      setTimeout(() => {
        alert(
          "Vous devez etre connecté pour déposer une annonce, vous allez etre dirigé vers la page login ..."
        );
        history.push("/login");
      }, 2000);
    } else {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("text", text);
      formData.append("price", price);
      try {
        const response = await axios.post(
          "https://leboncoin-api.herokuapp.com/offer/publish/",
          formData,
          {
            headers: {
              Authorization: "Beare" + userToken,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        history.push(`/offer/${response.data._id}`);
      } catch (error) {
        if (error.response.status === 500) {
          console.error("An error occured");
        } else {
          console.error(error.response.data.msg);
        }
      }
    }
  };
  console.log("title is here>>", title);
  console.log("text is here>>", text);
  console.log("price is here>>", price);
  console.log("price is here>>", file);

  return (
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
  );
}

export default Publish;
