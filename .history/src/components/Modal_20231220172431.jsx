import React from 'react'
import './modal.css'

function Modal({movie, status, toggleModal}) {
    return (
        <div className={`movieModal ${status ? 'active' : undefined}`}>
            <a href="#" className="modalClose" onClick={toggleModal}>
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe 
            width="1229" 
            height="691" 
            src={movie.video} 
            title={`${movie.title} | Official Trailer`} 
            frameBorder=0
            allow="accelerometer; clipboard-write"
            allowFullScreen
            ></iframe>
        </div>
    )
}

export default Modal
