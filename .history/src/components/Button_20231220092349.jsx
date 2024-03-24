import React from 'react'
import './button.css'

function Button( icon, name, bgColor, color) {
    return (
        <a href="#" className="mainBtn">
            {name}
        </a>
    )
}

export default Button
