// src/pages/BucketSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import Complexity from '../components/Complexity';
import { bucketSort } from '../hooks/useSort';

const BucketSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Bucket Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={bucketSort} />
      <Complexity 
        best="O(n+k)" 
        average="O(n+k)" 
        worst="O(n^2)" 
        space="O(n)" 
      />
    </div>
  );
};

export default BucketSort;
