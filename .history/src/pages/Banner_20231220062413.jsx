import React, {useState, useEffect} from 'react';
import './banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);
    const fetchData = () => {
        // ở projects real thì có thể fetch name khác
        fetch('http://localhost:3000/data/movieData.json')
        .then(res=>res.json())
        .then(data => setMovies(data))
        .catch(e=>console.log(e.message))
    }
    return (
    <div className="banner">
        
    </div>
    )
}

export default Banner
