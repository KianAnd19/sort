// src/pages/HeapSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { heapSort } from '../hooks/useSort';
import Header from '../components/Header';

const HeapSort = () => {
  return (
    <div class="bg-slate-200">
      {/* <h1 class="text-xl text-center font-bold">Heap Sort Visualizer</h1> */}
      <Header title="Heap Sort Visualizer" />
      <SortingVisualizer sortAlgorithm={heapSort} />
      <Complexity 
        best="O(nlog(n))" 
        average="O(nlog(n))"
        worst="O(nlog(n))"
        space="O(1)" 
      />
    </div>
  );
};

export default HeapSort;
