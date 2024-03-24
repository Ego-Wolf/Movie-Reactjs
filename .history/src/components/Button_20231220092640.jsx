import React from 'react'
import './button.css'

function Button({ icon, name, bgColor ='#ff3700', color='#ffffff' }) {
    return (
        <a href="#" className="mainBtn" style={{color: color,}}>
            {icon}
            {name}
            {bgColor}
            {color}
        </a>
    )
}

export default Button
