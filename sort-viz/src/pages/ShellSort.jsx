import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { shellSort } from '../hooks/useSort';

const ShellSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Shell Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={shellSort} />
      <Complexity 
        best="O(nlog(n))" 
        average="O(nlog(n))"
        worst="O(n^2)" 
        space="O(1)" 
      />
    </div>
  );
};

export default ShellSort;
