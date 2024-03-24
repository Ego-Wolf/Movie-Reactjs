// Modal.js
import React, { useRef } from 'react';
import './modal.css';

function Modal({ movie, status, toggleModal }) {
  const iframeRef = useRef(null);

  const closeModal = () => {
    // Pause the video before closing the modal
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
    toggleModal();
  };

  return (
    <div className={`movieModal ${status ? 'active' : undefined}`}>
      <a href="#" className="modalClose" onClick={closeModal}>
        <ion-icon name="close-outline"></ion-icon>
      </a>
      <iframe
        ref={iframeRef}
        width="1229"
        height="691"
        src={movie.video}
        title={`${movie.title} | Official Trailer`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Modal;
