import React from 'react';

const AboutMe = () => {
  return (
<div class="absolute top-16 left-1/6 w-2/3 bg-white shadow-lg rounded-md text-gray-700">

      <div class="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-t-md">
        <div class="flex space-x-2">
          <span class="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
          <span class="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
          <span class="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
        </div>
        <div>lapid-final_project/aboutme</div>
        <div></div> 
      </div>
    <div class="p-5 text-justify">
    <img src="/lapid-final_project/src/assets/zai2.png" className="!w-[136px] !h-40 mx-auto outline outline-offset-2 rounded-full mb-4 object-cover scale-110" />
      <h1 class="headerAbout">"I’m Nobody! Who are you?
      Are you Nobody too?" — Emily Dickinson</h1>

      Hello! I'm Zairen, a 20-year-old IT student passionate about web technologies. I'm currently studying at the University of the Cordilleras and dream of working as a full-stack developer!
      <br/>
      <br/>
      I was given the name Zairen, born on January 02, 2005, in Baguio City, Benguet, and never left. I have two siblings, Jan Carsten Sven and Shaireen Anne, both born on February 14 but with an 11-year gap and I am my parents' most humorous offspring and of course, the middle child. I have always questioned my parents for giving my siblings long names while I only have one, but I am grateful that I did not have to write such a long name on my papers every time. They said that they were planning to name me Ryzen because they thought I was going to be a boy and how funny it is that Ryzen is one of Advance Micro Devices' leading microprocessors and now I'm an IT student.
      <br/>
      <br/>

      I chose this program because of the emerging and constant development of Information Technology. As a perfectionist myself, I wanted to improve my skills even further simultaneously with the current trends in technology. And my long-term goal is to be a software engineer or web developer.
      </div>
      </div>

  );
};
export default AboutMe;