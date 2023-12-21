import React from 'react';
import './App.css';

import { NavBar } from './components';
import { Header, Footer, Portfolio, Introduction } from './containers';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Introduction />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
