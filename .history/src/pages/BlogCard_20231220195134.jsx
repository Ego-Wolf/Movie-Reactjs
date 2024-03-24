import React from 'react'
import './blogCard.css'

function BlogCard() {
    return (
        <div className="bolg col-xl-3 col-md-6 mb-4">
            <article>
                <div className="post-img">
                    <img src={blog.thumnail} alt="" className='img-fluid' />
                </div>
                <p className='post-category'>{blog.category}</p>

                <h2 className='title'>
                    <a href="#">{blog.title}</a>
                </h2>

                <div className="d-flex align-items-center">
                    <img src={blog.author.image} alt="" className='img-fluid post-author-img flex-shrink-0'/>
                </div>
            </article>
        </div>
    )
}

export default BlogCard
