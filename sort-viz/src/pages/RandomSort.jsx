import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { randomSort } from '../hooks/useSort';

const RandomSortPage = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Random Sort (BogoSort) Visualizer</h1>
      <SortingVisualizer sortAlgorithm={randomSort} />
    </div>
  );
};

export default RandomSortPage;
