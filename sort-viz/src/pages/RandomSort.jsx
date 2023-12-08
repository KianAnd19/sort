import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { randomSort } from '../hooks/useSort';
import Header from '../components/Header';

const RandomSortPage = () => {
  return (
    <div class="bg-slate-200">
      {/* <h1 class="text-xl text-center font-bold">Random Sort (BogoSort) Visualizer</h1> */}
        <Header title="Random Sort (BogoSort) Visualizer" />
      <SortingVisualizer sortAlgorithm={randomSort} />
      <Complexity 
        best="O(1)" 
        average="O(n^2)" 
        worst="O(n^2)" 
        space="O(1)" 
      />
    </div>
  );
};

export default RandomSortPage;
