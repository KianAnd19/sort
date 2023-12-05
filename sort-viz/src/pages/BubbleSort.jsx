import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { bubbleSort } from '../hooks/useSort';

const BubbleSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Bubble Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={bubbleSort} />
    </div>
  );
};

export default BubbleSort;
