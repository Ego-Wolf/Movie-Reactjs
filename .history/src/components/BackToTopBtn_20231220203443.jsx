import React from 'react'
import './backToTopBtn.css'

function BackToTopBtn() {
  return (
    <a className={`back-top-top $(scroll > 100 ? 'active' : undefined})`} onClick={back}></a>
  )
}

export default BackToTopBtn
