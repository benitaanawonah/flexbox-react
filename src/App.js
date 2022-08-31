import React from 'react';
import './css/App.css'
import Navbar from './components/Navbar';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Containe from './components/Containe';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Foot from './components/Foot';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Containe />
      <Hero4 />
      <Hero5 />
      <Foot />
    </div>
  )
}

export default App;
