import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer id='footer' className='footer'>
            <div className="footer-top">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-log-5 col-md-12 footer-info">
                            <a href="#" className="logo d-flex align-items-center">
                                <span>CINEMA</span>
                            </a>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, animi.
                            </p>
                            <div className="social-links mt-3">
                                <a href="#" className='twitter'>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="#" className='facebook'>
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                                <a href="#" className='instagram'>
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                                <a href="#" className='youtube'>
                                    <ion-icon name="logo-youtube"></ion-icon>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
