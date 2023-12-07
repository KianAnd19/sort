import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { selectionSort } from '../hooks/useSort';

const SelectionSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Selection Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={selectionSort} />

      <Complexity 
        best="O(n^2)" 
        average="O(n^2)" 
        worst="O(n^2)" 
        space="O(1)" 
      />
    </div>
  );
};

export default SelectionSort;
