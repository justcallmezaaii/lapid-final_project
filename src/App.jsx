import React from 'react';
import './index.css';  // Make sure this imports the Tailwind styles
import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  console.log("App rendering");

  return (
  <div className="h-screen w-screen flex flex-col justify-between text-white">
      <h1 className="text-4xl text-white text-center mt-10">This is visible</h1>

      <div className="p-8">
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'contact' && <Contact />}
      </div>


      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-xl p-3 rounded-3xl flex space-x-6 shadow-2xl border-white/30">
      {/* Photos icon → Skills */}
      <button onClick={() => setActiveSection('skills')}>
        <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Photos-512.png" className="h-12 hover:scale-110 transition-transform" />
      </button>

      {/* Notes icon → AboutMe */}
      <button onClick={() => setActiveSection('about')}>
        <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Notes-512.png" className="h-12 hover:scale-110 transition-transform" />
      </button>

      {/* Phone icon → Contact */}
      <button onClick={() => setActiveSection('contact')}>
        <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Phone-512.png" className="h-12 hover:scale-110 transition-transform" />
      </button>

      {/* Safari icon → Skills */}
      <button onClick={() => setActiveSection('skills')}>
        <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Safari-512.png" className="h-12 hover:scale-110 transition-transform" />
      </button>

      {/* Projects icon → Experience */}
      <button onClick={() => setActiveSection('experience')}>
        <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Files-512.png" className="h-12 hover:scale-110 transition-transform" />
      </button>
    </div>

    </div>
  );
}

export default App;


