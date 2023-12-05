import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { quickSort } from '../hooks/useSort';

const QuickSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Quick Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={quickSort} />
    </div>
  );
};

export default QuickSort;
