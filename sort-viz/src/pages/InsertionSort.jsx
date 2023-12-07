import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { insertionSort } from '../hooks/useSort';

const InsertionSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Bubble Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={insertionSort} />
      <Complexity 
        best="O(n)" 
        average="O(n^2)" 
        worst="O(n^2)" 
        space="O(1)" 
      />
    </div>
  );
};

export default InsertionSort;
