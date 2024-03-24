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
            </article>
        </div>
    )
}

export default BlogCard
