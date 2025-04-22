import React from 'react';
import ccna from '/src/assets/ccna-introduction-to-networks copy.png';

const Education = () => {
  return (

<div class="absolute top-16 left-1/4 w-1/2 bg-white shadow-lg rounded-md text-gray-700">
    <div class="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-t-md">
      <div class="flex space-x-2">
        <span class="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
        <span class="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
        <span class="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
      </div>
      <div>lapid-final_project/education</div>
      <div></div> 
    </div>
    <div class="p-4 text-center">
      <div id="education" className="window content-section" style={{ display: 'block' }}>
      <section>
        <h2 className="text-3xl font-semibold text-blue-600">Education</h2>
        <ul className="mt-4 list-disc list-inside text-justify">
          <li>Bachelor's in Information Technology Major in Web Technologies – University of the Cordilleras, 2nd year student</li>
          <li>Junior and Senior High School- Science, Technology, Engineering , and Mathematics &#40;STEM- Math Track&#41; in Saint Louis School, Inc.	</li>
          <li>Elementary- University of the Cordilleras</li>
          <li>Cicso Networking Academy Verified- CCNA 1 ITN , CCNA 2 SRWE<img src={ccna}/></li>
        </ul>
      </section>
    </div>  

    </div>
    </div>
  );
};

export default Education;

