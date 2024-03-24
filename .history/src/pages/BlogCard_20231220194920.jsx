import React from 'react'
import './blogCard.css'

function BlogCard() {
    return (
        <div className="bolg col-xl-3 col-md-6 mb-4">
            <article>
                <div className="post-img">
                    <img src={blog.thumnail} alt="" />
                </div>
            </article>
        </div>
    )
}

export default BlogCard
