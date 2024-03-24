import React, {useState, useEffect} from 'react'
import './blog.css'

function Blog() {
    const [blogs, setBlogs] = useState([]);

    return (
        <section id="blogs" className='blogs'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className="section-title">Our Blog</h4>
                </div>
            </div>
        </section>
    )
}

export default Blog
