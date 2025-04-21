import React, { useEffect, useState } from 'react';

export default function StatusBar() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const options = {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      };
      setCurrentTime(now.toLocaleString('en-US', options));
    }

    updateTime(); // initialize immediately
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-2 bg-white/20 backdrop-blur-xl text-white text-sm font-medium shadow-md">
      <div className="flex space-x-6">
        <span className="font-bold"> Finder</span>
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
        <span>Go</span>
        <span>Windows</span>
        <span>Help</span>
      </div>
      <div className="ml-auto">
        {currentTime}
      </div>
    </div>
  );
}
