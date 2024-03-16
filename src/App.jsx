import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';





function App() {
  return (

    <div className="App">
      <Header />
        <Routes>
        <Route path="/about" element={<AboutMe />} />
        <Route path="/" element={<AboutMe />} />
       
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />

        </Routes>

        

    
      <Footer />
    </div>
    
  );
}

export default App;