import React from 'react';

const Experience = () => {
  return (
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
  );
};

export default Experience;
