import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { bubbleSort } from '../hooks/useSort';
import Header from '../components/Header';

const BubbleSort = () => {
  return (
    <div class="bg-slate-200">
      {/* <h1 class="text-xl text-center font-bold">Bubble Sort Visualizer</h1> */}
      <Header title="Bubble Sort Visualizer" />
      <SortingVisualizer sortAlgorithm={bubbleSort} />

      <Complexity 
        best="O(n)" 
        average="O(n^2)" 
        worst="O(n^2)" 
        space="O(1)" 
      />
    </div>
  );
};

export default BubbleSort;
