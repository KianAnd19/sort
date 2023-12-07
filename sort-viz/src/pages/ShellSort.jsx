// src/pages/ShellSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { shellSort } from '../hooks/useSort';

const ShellSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Shell Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={shellSort} />
    </div>
  );
};

export default ShellSort;
