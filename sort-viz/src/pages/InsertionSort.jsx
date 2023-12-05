import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { insertionSort } from '../hooks/useSort';

const InsertionSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Bubble Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={insertionSort} />
    </div>
  );
};

export default InsertionSort;
