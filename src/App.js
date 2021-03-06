import React from 'react';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Kits from './Components/Kits';
import IdealForYou from './Components/IdealForYou';
import HelpArea from './Components/HelpArea';
import HowTo from './Components/HowTo';
import HowWeWork from './Components/HowWeWork';
import ContactUs from './Components/ContactUs';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
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
        <HowTo />
        <ContactUs />
        <HowWeWork />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
