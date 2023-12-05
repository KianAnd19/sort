// src/components/HomeScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div>
        <h1 className="text-xl font-large text-black">Sorting Algorithm Visualizer</h1>
        <ul className="list-disc">
          <li><Link to="/selection-sort" className="text-blue-600 hover:text-blue-800">Selection Sort</Link></li>
          <li><Link to="/insertion-sort" className="text-blue-600 hover:text-blue-800">Insertion Sort</Link></li>
          <li><Link to="/quick-sort" className="text-blue-600 hover:text-blue-800">Quick Sort</Link></li>
          <li><Link to="/bubble-sort" className="text-blue-600 hover:text-blue-800">Bubble Sort</Link></li>
          {/* Add more links for other sorting algorithms */}
        </ul>
      </div>
    </div>
  );
};

export default HomeScreen;
