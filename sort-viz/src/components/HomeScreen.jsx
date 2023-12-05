// src/components/HomeScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="p-5 bg-slate-200">
      <h1 className="text-3xl font-bold text-center mb-10">Sorting Algorithm Visualizer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link to="/bubble-sort" className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 hover:bg-gray-100">
          <div className="text-xl font-medium text-black">Bubble Sort</div>
        </Link>
        <Link to="/insertion-sort" className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 hover:bg-gray-100">
          <div className="text-xl font-medium text-black">Insertion Sort</div>
        </Link>
        <Link to="/selection-sort" className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 hover:bg-gray-100">
          <div className="text-xl font-medium text-black">Selection Sort</div>
        </Link>
        <Link to="/quick-sort" className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 hover:bg-gray-100">
          <div className="text-xl font-medium text-black">Quick Sort</div>
        </Link>
        {/* Add more sorting algorithm cards here */}
      </div>
    </div>
  );
};

export default HomeScreen;
