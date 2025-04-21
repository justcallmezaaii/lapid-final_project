import React from 'react';

const Skills = () => {
  return (
<div class="absolute top-16 left-1/4 w-1/2 bg-white shadow-lg rounded-md text-gray-700">
    <div class="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-t-md">
      <div class="flex space-x-2">
        <span class="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
        <span class="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
        <span class="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
      </div>
      <div>lapid-final_project/skills</div>
      <div></div> 
    </div>
    <div class="p-4 text-center">
      <div id="skills" className="window content-section" style={{ display: 'block' }}>
      <img src="/lapid-final_project/src/assets/zai3.png" className="!w-[136px] !h-40 mx-auto outline rounded-full mb-2 object-cover scale-110" />

      <h2 className="text-3xl font-semibold text-blue-600">Skills</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">HTML5</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">CSS</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">JavaScript</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">Java</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">C#</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">Node.js</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">Express.js</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">Oracle</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">React</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">Tailwind CSS</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">Figma</span>
        <span className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-center">Git & GitHub</span>
      </div>
    </div>

    </div>
    </div>
  );
};

export default Skills;
