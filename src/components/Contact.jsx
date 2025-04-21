import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (This is just a demo)');
  };

  return (
    <div className="absolute top-16 left-1/4 w-1/2 bg-white shadow-lg rounded-md text-gray-700">
      
      <div className="flex items-center justify-between bg-gray-200 px-3 py-1 rounded-t-md">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full inline-block"></span>
        </div>
        <div>lapid-final_project/contact</div>
        <div></div> 
      </div>

      <div className="p-4 text-center">
      <img src="/lapid-final_project/src/assets/zai1.png" className="!w-[136px] !h-40 mx-auto outline rounded-full mb-2 object-cover scale-110" />

        <h2 className="text-3xl font-semibold text-blue-600">Contact</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-xl mx-auto text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded h-32"
            required
          ></textarea>

          <button type="submit"
            className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:ring-3 focus:outline-hidden"
            href="#"
          >
            <span
              className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full"
            ></span>

            <span
              className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
            >
              Send
            </span>
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
