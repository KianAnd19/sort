// src/pages/RadixSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { radixSort } from '../hooks/useSort';
import Header from '../components/Header';

const RadixSort = () => {
  return (
    <div class="bg-slate-200">
      {/* <h1 class="text-xl text-center font-bold">Radix Sort Visualizer</h1> */}
        <Header title="Radix Sort Visualizer" />
      <SortingVisualizer sortAlgorithm={radixSort} />
      <Complexity 
        best="O(nk)" 
        average="O(nk)" 
        worst="O(nk)" 
        space="O(n + k)" 
      />
    </div>
  );
};

export default RadixSort;
