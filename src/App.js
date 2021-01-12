import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Kits from './Components/Kits';
import IdealForYou from './Components/IdealForYou';
import HelpArea from './Components/HelpArea';
import './App.css';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <Kits />
        <IdealForYou />
        <HelpArea />
      </main>
    </>
  );
}

export default App;
