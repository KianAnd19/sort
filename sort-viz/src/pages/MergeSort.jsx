import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { mergeSort } from '../hooks/useSort';

const MergeSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Merge Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={mergeSort} />
    </div>
  );
};

export default MergeSort;
