import React from 'react';

export default function StatusBar() {
    return (
      <div className="fixed top-0 left-0 w-full h-6 bg-black bg-opacity-40 text-white text-xs flex justify-between items-center px-4 font-medium z-50">
        <div className="flex gap-4">
          <span className="font-semibold"></span>
          <span>Finder</span>
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Window</span>
          <span>Help</span>
        </div>
        <div className="flex gap-2 items-center">
          <span> {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>
    );
  }
  