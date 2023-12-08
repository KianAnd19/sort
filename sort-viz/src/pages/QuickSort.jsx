import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { quickSort } from '../hooks/useSort';
import Header from '../components/Header';

const QuickSort = () => {
  return (
    <div class="bg-slate-200">
      {/* <h1 class="text-xl text-center font-bold">Quick Sort Visualizer</h1> */}
      <Header title="Quick Sort Visualizer" />
      <SortingVisualizer sortAlgorithm={quickSort} />
      <Complexity 
        best="O(nlog(n))" 
        average="O(nlog(n))"
        worst="O(n^2)" 
        space="O(n)" 
      />
    </div>
  );
};

export default QuickSort;
