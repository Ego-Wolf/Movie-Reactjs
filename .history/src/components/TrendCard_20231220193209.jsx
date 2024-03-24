import React from 'react'
import './trendCard.css'

function TrendCard( {slide}) {
  return (
    <div className="trend-card">
        <img src={slide.previewImg} className="img-fluild" />
        <a href="#">Add to calendar </a>
    </div>
  )
}

export default TrendCard
