import logo from './logo.svg';

// Import all of Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import 'swiper/css';

import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';
import Main from './pages/Main';
import Footer from './pages/Footer';
import BackToTopBtn from './components/BackToTopBtn';

function App() {
  // the scroll position of windows
  const [scroll, setScroll] = useState(0);

  // constantly listen to the scroll position
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  return () => {
    window.removeEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  };
}, [scroll]);

  return (
    <>
      <Header/>
      <Banner/>
      <Main/>
      <Footer/>
      <BackToTopBtn scroll/>
    </>
  );
}

export default App;
