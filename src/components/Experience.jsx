import React from 'react';

const Experience = () => {
  return (
    <div class="absolute top-16 left-1/4 w-1/2 bg-white shadow-lg rounded-md text-gray-700">
    <div class="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-t-md">
      <div class="flex space-x-2">
        <span class="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
        <span class="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
        <span class="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
      </div>
      <div>lapid-final_project/experience</div>
      <div></div> 
    </div>
    <div class="p-4 text-center">
    <div id="experience" className="window content-section" style={{ display: 'block' }}>
      <section>
        <h2 className="text-3xl font-semibold text-blue-600">Experience</h2>
        <ul className="mt-4 space-y-2">
          <li>
            <h3 className="font-semibold">UI/UX Designer – Freelance</h3>
            <p>Created web interfaces and prototypes using Figma, HTML/CSS, and wordpress</p>
          </li>
          <li>
            <h3 className="font-semibold">Part-time Barista</h3>
            <p>Helped served and make beverages in a small cafe near Saint Louis University Maryheights Campus</p>
          </li>
          <div className="bg-blue-50 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Projects</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
            
            <div className="text-center">
              <a href="https://justcallmezaaii.github.io/">
                <img src="src/assets/githubpages.ico" className="w-20 h-20 object-contain hover:scale-105 transition-transform mx-auto" />
                <p className="text-sm mt-2">GitHub Pages</p>
              </a>
            </div>

            <div className="text-center">
              <a href="https://justcallmezaaii.github.io/api-call">
                <img src="src/assets/comet.png" className="w-20 h-20 object-contain hover:scale-105 transition-transform mx-auto" />
                <p className="text-sm mt-2">Spacing Out</p>
              </a>
            </div>

            <div className="text-center">
              <a href="https://ctrl-care.onrender.com">
                <img src="src/assets/ctrl+care.png" className="w-20 h-20 object-contain hover:scale-105 transition-transform mx-auto" />
                <p className="text-sm mt-2">Ctrl+Care</p>
              </a>
            </div>

            <div className="text-center">
              <a href="https://justcallmezaaii.github.io/sinkssys">
                <img src="src/assets/sinksrus.png" className="w-20 h-20 object-contain hover:scale-105 transition-transform mx-auto" />
                <p className="text-sm mt-2">Sinks R Us</p>
              </a>
            </div>

            <div className="text-center">
              <a href="https://justcallmezaaii.github.io/porfolio">
                <img src="src/assets/portfolio.png" className="w-20 h-20 object-contain hover:scale-105 transition-transform mx-auto" />
                <p className="text-sm mt-2">Portfolio</p>
              </a>
            </div>

          </div>
        </div>


        </ul>
      </section>
    </div>
    </div>
    </div>
    
  );
};

export default Experience;
