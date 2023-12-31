// src/components/HomeScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <div className=" bg-slate-200">
      <Header title="Sorting Algorithm Visualizer"/>
      {/* <h1 className="text-3xl font-bold text-center mb-10">Sorting Algorithm Visualizer</h1> */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <Link to="/selection-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s1.png)', backgroundSize: 'cover' }}>
          <div className="text-xl text-center font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Selection Sort</div>
        </Link>
        <Link to="/insertion-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s2.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Insertion Sort</div>
        </Link>
        <Link to="/bubble-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s3.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Bubble Sort</div>
        </Link>
        <Link to="/quick-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s4.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Quick Sort</div>
        </Link>
        <Link to="/merge-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s5.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Merge Sort</div>
        </Link>
        <Link to="/heap-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s6.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Heap Sort</div>
        </Link>
        <Link to="/radix-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s7.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Radix Sort</div>
        </Link>
        <Link to="/bucket-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s8.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Bucket Sort</div>
        </Link>
        <Link to="/shell-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s9.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Shell Sort</div>
        </Link> 
        <Link to="/counting-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s10.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Counting Sort</div>
        </Link>
        <Link to="/random-sort" className="min-w-[300px] min-h-[300px] p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex justify-center items-center space-x-4 hover:bg-gray-100" style={{ backgroundImage: 'url(/sort/s11.png)', backgroundSize: 'cover' }}>
          <div className="text-xl font-medium text-black bg-slate-50 rounded-sm px-1 shadow-xl">Random Sort</div>
        </Link>
        {/* Add more sorting algorithm cards here */}
      </div>
    </div>
  );
};

export default HomeScreen;
