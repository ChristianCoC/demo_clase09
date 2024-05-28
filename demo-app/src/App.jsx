import './App.css' // Estilos
import { useState, useEffect } from 'react' // Manejo de estados
import Card from './Card.jsx' // Tarjetas
import Image from './Image.jsx' // Imágenes

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

  return (

      <div className="App">
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
