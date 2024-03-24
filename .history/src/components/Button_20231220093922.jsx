import React from 'react'
import './button.css'

function Button({ icon, name, bgColor ="#ff3700", color='#ffffff' }) {
    return (
        <a href="#" className="mainBtn" >
            {icon} {name}
        </a>
    )
}

export default Button
