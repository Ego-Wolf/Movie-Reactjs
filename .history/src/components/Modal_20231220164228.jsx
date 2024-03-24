import React from 'react'
import './modal.css'

function Modal({movie}) {
    return (
        <div className="movieModal">
            <a href="#" className="modalClose">
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe 
            width="1229" 
            height="691" 
            src={movie.video} 
            title={`${movie.title} `} allowFullScreen
            ></iframe>
        </div>
    )
}

export default Modal
