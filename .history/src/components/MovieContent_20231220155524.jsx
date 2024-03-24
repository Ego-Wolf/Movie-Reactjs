import React from 'react'
import './movieContent.css'
import titleImg from '../images/transformer-title.png';
import Button from './Button';


function MovieContent() {
  return (
    <div className="content">
      <img src={movie.titleImg} alt="Movie Title" className="movie-title" />
      <h4>
        <span></span>
        <span><i>age</i></span>
        <span>length</span>
        <span>category</span>
      </h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nesciunt quaerat, exercitationem placeat iste voluptates eaque sapiente culpa, quis, impedit tempore ex? Dicta possimus quasi sequi esse blanditiis eum quae error harum laboriosam eveniet pariatur voluptate, qui tempora incidunt fuga quod ab delectus vero mollitia fugiat quaerat? Cum, vel velit.</p>
      <div className="button">
        <Button 
        icon={<ion-icon name="bookmark-outline"></ion-icon>} 
        name="Book"
        color="#ff3700"
        bgColor="#ffffff"/>
        <Button icon={<ion-icon name="add-outline"></ion-icon>}
        name="My list"/>
      </div>
    </div>
  )
}

export default MovieContent
