import React from 'react';
import './index.css';  // Make sure this imports the Tailwind styles
import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StatusBar from './components/Statusbar';




function App() {
  const [activeSection, setActiveSection] = useState('about');
  console.log("App rendering");

  return (
  <div className="h-screen w-screen flex flex-col justify-between text-white">
      <StatusBar/>
      <div className="p-8">
        {activeSection === 'about' && <AboutMe />}
        {activeSection === 'education' && <Education />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'experience' && <Experience />}
        {activeSection === 'contact' && <Contact />}
      </div>


      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-3xl flex space-x-4 shadow-lg border border-white/30">

      <button onClick={() => setActiveSection('skills')}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Photos-512.png"
          alt="Photos"
          className="h-8 w-auto hover:scale-110 transition-transform duration-200"
        />
      </button>

        <button onClick={() => setActiveSection('about')}>
          <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Notes-512.png" className="h-8 w-auto hover:scale-110 transition-transform duration-200" />
        </button>
        <button onClick={() => setActiveSection('contact')}>
          <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Phone-512.png" className="h-8 w-auto hover:scale-110 transition-transform duration-200" />
        </button>
        <button onClick={() => setActiveSection('skills')}>
          <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Safari-512.png" className="h-8 w-auto hover:scale-110 transition-transform duration-200" />
        </button>
        <button onClick={() => setActiveSection('experience')}>
          <img src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Files-512.png" className="h-8 w-auto hover:scale-110 transition-transform duration-200" />
        </button>
</div>


    </div>

  );
}

export default App;


