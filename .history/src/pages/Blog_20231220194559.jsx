import React, {useState, useEffect} from 'react'
import './blog.css'

function Blog() {
    const [blogs, setBlogs] = useState([]);

    const fetch
    // ở projects real thì có thể fetch name khác
    fetch('http://localhost:3000/data/movieData.json')
    .then(res => res.json())
    .then(data => {
        setSlides(data);
    })
    .catch(e => console.log(e.message));
};

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <section id="blogs" className='blogs'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Our Blog</h4>
                </div>
                <div className="row mt-5"></div>
            </div>
        </section>
    )
}

export default Blog
