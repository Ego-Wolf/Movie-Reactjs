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

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header/>
      <Banner/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
