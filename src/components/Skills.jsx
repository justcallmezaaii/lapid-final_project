import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="window content-section" style={{ display: 'block' }}>
      <h2 className="text-3xl font-semibold text-blue-600">Skills</h2>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-center">HTML & CSS</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-center">JavaScript</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-center">React</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-center">Tailwind CSS</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-center">Figma</span>
        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-center">Git & GitHub</span>
      </div>
    </div>
  );
};

export default Skills;
