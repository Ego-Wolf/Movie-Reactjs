import React, {useState, useEffect} from 'react';
import './banner.css';

function Banner() {
    const [movies, setMovies] = useState([]);
    const fetchData = () => {
        // ở projects real thì có thể fetch name khác
        fetch('http://localhost:3000/data/movieData.json')
        .then(res => res.json())
        .then(data => setMovies(data))
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData()
    },[]);

    return (
    <div className="banner">
        <div className="movie">
            <img src="" alt="Background Image" className="bgImg" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                    <div className="content">
                        <img src="" alt="Movie Title" className="movie-title" />
                        <h4><span>Year</span>
                            <span><i>age</i></span>
                            <span>length</span>
                            <span>category</span>
                        </h4>
                    </div>
                    </div>
                    <div className="col-lg-6 col-md-12">

                    </div>

                </div>
            </div>
        </div>
    </div>
    )
}

export default Banner
