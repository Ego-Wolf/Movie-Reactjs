import React from 'react'
import './trendCard.css'

function TrendCard( {slide}) {
  return (
    <div className="trend-card">
        <img src={slide.previewImg} className="img-fluild" />
        <a href="#"></a>
    </div>
  )
}

export default TrendCard
