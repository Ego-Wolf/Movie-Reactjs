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
                    <div className="post-meta">
                        <p className="post-author-list">{blog.author.name}</p>
                        <p className="post-date">
                            <time dateTime='2022-01-01'>{blog.data}</time>
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BlogCard
