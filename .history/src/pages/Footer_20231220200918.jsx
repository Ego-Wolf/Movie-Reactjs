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
                                <a href="#" className='twitter'>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                                <a href="#" className='twitter'>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
