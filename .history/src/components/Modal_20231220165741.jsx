import React from 'react'
import './modal.css'

function Modal({movie, status, toggleModal}) {
    return (
        <div className={`movieModal &{status ? 'active' : undefined}`}>
            <a href="#" className="modalClose" onClic>
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe 
            width="1229" 
            height="691" 
            src={movie.video} 
            title={`${movie.title} | Official Trailer`} 
            allowFullScreen
            ></iframe>
        </div>
    )
}

export default Modal
