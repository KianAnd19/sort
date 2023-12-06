// src/pages/HeapSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { heapSort } from '../hooks/useSort';

const HeapSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Heap Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={heapSort} />
    </div>
  );
};

export default HeapSort;
