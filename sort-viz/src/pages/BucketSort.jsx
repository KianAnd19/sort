// src/pages/BucketSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { bucketSort } from '../hooks/useSort';

const BucketSort = () => {
  return (
    <div class="bg-slate-200">
      <h1 class="text-xl text-center font-bold">Bucket Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={bucketSort} />
    </div>
  );
};

export default BucketSort;
