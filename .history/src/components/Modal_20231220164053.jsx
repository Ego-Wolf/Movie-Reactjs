import React from 'react'
import './modal.css'

function Modal({movie}) {
    return (
        <div className="movieModal">
            <a href="#" className="modalClose">
                <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe width="1229" height="691" src="https://www.youtube.com/embed/0mdjgQdQF1k" title="🚀 Master the Art of React.js: Crafting a Stream Movie Website" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}

export default Modal
