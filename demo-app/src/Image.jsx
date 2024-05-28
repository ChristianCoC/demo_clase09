/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./App.css";

const Image = ({ id, handleClose }) => {

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
    .then(response => response.json())
    .then(data => setCharacter(data[0]))
  }, [id])

  return (
    <div className="modalImage">
      {
        !character ? <h3>Cargando...</h3> : (
          <>
            <h2>{character?.name}</h2>
            <img className="image" src={character?.image} alt={character?.name} />
            <button className="buttonClose" onClick={handleClose}>X</button>
          </>
        )
      }
    </div>
  );
};

export default Image;