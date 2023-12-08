import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { mergeSort } from '../hooks/useSort';
import Header from '../components/Header';

const MergeSort = () => {
  return (
    <div class="bg-slate-200">
      {/* <h1 class="text-xl text-center font-bold">Merge Sort Visualizer</h1> */}
        <Header title="Merge Sort Visualizer" />
        <SortingVisualizer sortAlgorithm={mergeSort} />
        <Complexity 
            best="O(nlog(n))"
            average="O(nlog(n))"
            worst="O(nlog(n))" 
            space="O(n)" 
        />
    </div>
  );
};

export default MergeSort;
