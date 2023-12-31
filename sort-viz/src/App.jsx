import React from 'react';
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { AudioProvider } from './AudioContext';
import HomeScreen from './components/HomeScreen';

import SelectionSortPage from './pages/SelectionSort';
import InsertionSortPage from './pages/InsertionSort';
import QuickSortPage from './pages/QuickSort';
import BubbleSortPage from './pages/BubbleSort';
import MergeSortPage from './pages/MergeSort';
import HeapSortPage from './pages/HeapSort';
import RadixSortPage from './pages/RadixSort';
import BucketSortPage from './pages/BucketSort';
import ShellSortPage from './pages/ShellSort';
import CountingSortPage from './pages/CountingSort';
import RandomSortPage from './pages/RandomSort';

// Import other sorting pages...

function App() {
  return (
    <AudioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/selection-sort" element={<SelectionSortPage />} />
          <Route path="/insertion-sort" element={<InsertionSortPage />} />
          <Route path="/quick-sort" element={<QuickSortPage />} /> 
          <Route path="/bubble-sort" element={<BubbleSortPage />} /> 
          <Route path="/merge-sort" element={<MergeSortPage />} />
          <Route path="/heap-sort" element={<HeapSortPage />} />
          <Route path="/radix-sort" element={<RadixSortPage />} />
          <Route path="/bucket-sort" element={<BucketSortPage />} />
          <Route path="/shell-sort" element={<ShellSortPage />} />
          <Route path="/counting-sort" element={<CountingSortPage />} />
          <Route path="/random-sort" element={<RandomSortPage />} />
          {/* Define routes for other sorting pages... */}
        </Routes>
      </Router>
    </AudioProvider>
  );
}

export default App;
