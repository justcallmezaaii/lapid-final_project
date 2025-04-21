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
        </ul>
      </section>
    </div>
    </div>
    </div>
    
  );
};

export default Experience;
