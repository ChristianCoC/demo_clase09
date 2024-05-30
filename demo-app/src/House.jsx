import "./App.css";

// eslint-disable-next-line react/prop-types
const House = ({ houses }) => {

    //const [house, setHouse] = useState({});

    // eslint-disable-next-line react/prop-types
    const { house } = houses;

    return (
        
        <button >{house}</button>
        
    );
};

export default House;