import React, { useState } from "react";
import "./publish.css";

function Publish() {
  const [title, setTitle] = useState("Titre");
  const [text, setText] = useState("Texte de l'annonce");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();

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
        <form action="" className="publish__formblock">
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
