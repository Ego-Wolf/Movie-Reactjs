import React from 'react'
import './movieContent.css'
import titleImg from '../images/transformer-title.png';


function MovieContent() {
  return (
    <div className="content active">
      <img src={titleImg} alt="Movie Title" className="movie-title" />
      <h4><span>Year</span>
          <span><i>age</i></span>
          <span>length</span>
          <span>category</span>
      </h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt quaerat, exercitationem placeat iste voluptates eaque sapiente culpa, quis, impedit tempore ex? Dicta possimus quasi sequi esse blanditiis eum quae error harum laboriosam eveniet pariatur voluptate, qui tempora incidunt fuga quod ab delectus vero mollitia fugiat quaerat? Cum, vel velit.</p>
      <div className="button">
        a.main
      </div>
    </div>
  )
}

export default MovieContent
