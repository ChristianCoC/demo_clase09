/* eslint-disable react/prop-types */
import "./App.css";

const Card = ({ character, handleClick }) => {
  
  const { name, house, id } = character


  return (
    <div className="card">
      <h1>{name}</h1>
      <h2>{house}</h2>
      <button onClick={() => handleClick(id)}>Imagen</button>
    </div>
  );
};

export default Card;