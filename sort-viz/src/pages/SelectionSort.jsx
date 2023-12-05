import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { selectionSort } from '../hooks/useSort';

const SelectionSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Selection Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={selectionSort} />
    </div>
  );
};

export default SelectionSort;
