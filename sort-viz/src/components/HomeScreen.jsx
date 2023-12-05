// src/components/HomeScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="p-5 bg-slate-200">
      <h1 className="text-3xl font-bold text-center mb-10">Sorting Algorithm Visualizer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link to="/selection-sort" className="min-w-[200px] min-h-[200px] p-6 max-w-sm mx-auto rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/s1.png)', backgroundSize: 'cover' }}>
          <div className="text-xl text-center font-medium text-black bg-slate-50 rounded-sm px-1">Selection Sort</div>
        </Link>
        <Link to="/insertion-sort" className="min-w-[200px] min-h-[200px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/s2.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1">Insertion Sort</div>
        </Link>
        <Link to="/bubble-sort" className="min-w-[200px] min-h-[200px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/s3.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1">Bubble Sort</div>
        </Link>
        <Link to="/quick-sort" className="min-w-[200px] min-h-[200px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/s4.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1">Quick Sort</div>
        </Link>
        <Link to="/merge-sort" className="min-w-[200px] min-h-[200px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/s5.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1">Merge Sort</div>
        </Link>
        <Link to="/heap-sort" className="min-w-[200px] min-h-[200px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/s6.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1">Heap Sort</div>
        </Link>
        <Link to="/radix-sort" className="min-w-[200px] min-h-[200px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/s7.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1">Radix Sort</div>
        </Link>
        <Link to="/bucket-sort" className="min-w-[200px] min-h-[200px] p-6 max-w-sm mx-auto rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/s8.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1">Bucket Sort</div>
        </Link> 

        {/* Add more sorting algorithm cards here */}
      </div>
    </div>
  );
};

export default HomeScreen;
