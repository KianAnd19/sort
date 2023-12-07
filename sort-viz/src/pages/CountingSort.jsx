import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { countingSort } from '../hooks/useSort';

const CountingSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Counting Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={countingSort} />
      <Complexity 
        best="O(n+k)" 
        average="O(n+k)" 
        worst="O(n+k)" 
        space="O(k)" 
      />
    </div>
  );
};

export default CountingSort;
