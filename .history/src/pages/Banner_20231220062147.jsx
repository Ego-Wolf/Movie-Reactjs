import React, {useState, useEffect} from 'react';
import './banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);
    const fetchData = () => {
        fetch(http://localhost:3000/data/movieData.json)
    }
    return (
    <div className="banner">
        
    </div>
    )
}

export default Banner
