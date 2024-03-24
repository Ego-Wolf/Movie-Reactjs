import React from 'react'
import './trendCard.css'

function TrendCard( {slide}) {
  return (
    <div className="trend-card">
        <img src={slide.previewImg} alt="" className="img-fluild" />
    </div>
  )
}

export default TrendCard
