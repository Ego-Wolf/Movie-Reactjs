import React from 'react'
import './footer.css'

function Footer() {
    const usefulLinks = [
        'Home',
        'Movies',
        'My List',
        'Terms of service',
        'Privacy Policy',
    ];
    const locations = [
        'Dolorum optio',
        'Non rem rerum',
        'Cras fermentum odio',
        'Justo eget',
        'Fermentum iaculiso',
    ];

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
                            <ul>
                                {usefulLinks.map(link => {
                                    <FooterNavItem key={link} name={link}/>
                                })}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>Ours cinemas</h4>
                            <ul>
                                {locations.map(link => {
                                    <FooterNavItem key={link} name={link}/>
                                })}
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                Street Name <br />
                                City Name, State 123456 <br />
                                Australia <br />
                                <br />
                                <strong>Phone:</strong> + 1 2345 6789 00
                                <br />
                                <strong>Email:</strong> info@example.com
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="conatiner">
                <div className="copyright">
                    &copy: Copyright{' '}
                    <strong>
                        <span>DStudio Technology</span>
                    </strong>
                </div>
            </div>
        </footer>
    )
}

export default Footer
