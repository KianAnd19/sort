import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';

import SelectionSortPage from './pages/SelectionSort';
import InsertionSortPage from './pages/InsertionSort';
import QuickSortPage from './pages/QuickSort';
import BubbleSortPage from './pages/BubbleSort';
import MergeSortPage from './pages/MergeSort';
// import HeapSortPage from './pages/HeapSort';

// Import other sorting pages...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/selection-sort" element={<SelectionSortPage />} />
        <Route path="/insertion-sort" element={<InsertionSortPage />} />
        <Route path="/quick-sort" element={<QuickSortPage />} /> 
        <Route path="/bubble-sort" element={<BubbleSortPage />} /> 
        <Route path="/merge-sort" element={<MergeSortPage />} />
        {/* <Route path="/heap-sort" element={<HeapSortPage />} /> */}
        {/* Define routes for other sorting pages... */}
      </Routes>
    </Router>
  );
}

export default App;
