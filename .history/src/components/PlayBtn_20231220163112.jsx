import React from 'react'
import './playBtn.css'

function PlayBtn({movie}) {
    return (
        <div className={``}>
            <a href="#" className="playBtn">
                <ion-icon name="play-outline"></ion-icon>
            </a>
            <p>Watch trailer</p>
        </div>
    )
}

export default PlayBtn
