import React from 'react'
import './backToTopBtn.css'


function BackToTopBtn({ scroll }) {
  return (
    <a className={`back-top-top $(scroll > 100 ? 'active' : undefined}`} onClick={backToTop}>
        <ion-icon name="arrow-up-outline"></ion-icon>
    </a>
  );
}

export default BackToTopBtn
