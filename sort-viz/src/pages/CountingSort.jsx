// src/pages/CountingSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { countingSort } from '../hooks/useSort';

const CountingSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Counting Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={countingSort} />
    </div>
  );
};

export default CountingSort;
