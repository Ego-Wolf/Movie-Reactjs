import logo from './logo.svg';

// Import all of Bootstrap's CSS
import "bootstrap/dist/css/bootstrap.min";


import './App.css';
import Header from './pages/Header';
import Banner from './pages/Banner';

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
    </>
  );
}

export default App;
