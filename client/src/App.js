import React, { Component } from 'react';
import topbar from './topbar.png';
import bottombar from './bottombar.png';
import './App.css';
import Photo1 from './components/Photo1.js';
import Photo2 from './components/Photo2.js';
import Photo3 from './components/Photo3.js';
import StickyHeader from 'react-sticky-header';
import 'react-sticky-header/styles.css';
import StickyFooter from 'react-sticky-footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <StickyHeader 
        header = {
        <header className="App-header">
          <img src={topbar} alt="topbar" />
        </header>
        }
        >
      </StickyHeader>
        <body className="App-feed">
          <div>
            <Photo1 />
          </div>
          <div>
            <Photo2 />
          </div>
          <div>
            <Photo3 />
          </div>
        </body>
          <footer>
            <img src={bottombar} alt="bottombar" />
          </footer>
      </div>
   ); 
  }
}

export default App;
