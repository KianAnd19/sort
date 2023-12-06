// src/pages/RadixSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { radixSort } from '../hooks/useSort';

const RadixSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Radix Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={radixSort} />
    </div>
  );
};

export default RadixSort;
