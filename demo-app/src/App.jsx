import './App.css' // Estilos
import { useState, useEffect } from 'react' // Manejo de estados
import Card from './Card.jsx' // Tarjetas
import Image from './Image.jsx' // Imágenes
import House from './House.jsx' // Casas

function App() {

  const [characters, setCharacters] = useState([]);
  const [image, setImage] = useState(false);
  const [id, setId] = useState(0);
  console.log(image);
  console.log(id);

  const handleClick = (id) => {
    setId(id);
    setImage(true);
  }

  const handleClose = () => {
    setImage(false);
  }

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(response => response.json())
      .then(data => setCharacters(data))
    return () => {
      setId(0)
    }
  }, []);

  const uniqueHouses = [...new Set(characters.map((character) => character.house))];

  return (
      <div className="App">
        <nav className='nav-houses'>
          {uniqueHouses.filter((house) => house).map((house) => (
            <House key={house} houses={{ house }} />
          ))}
        </nav>
        <h1>Harry Potter</h1>
        {
          characters.map((character) => {
            return <Card key={character.id} character={character} handleClick={handleClick} />
          })
        };

        {
          image && <Image id={id} handleClose={handleClose} />
        };
      </div>
  );
}

export default App
