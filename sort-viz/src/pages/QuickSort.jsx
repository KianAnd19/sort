import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { quickSort } from '../hooks/useSort';

const QuickSort = () => {
  return (
    <div>
      <h1>Quick Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={quickSort} />
    </div>
  );
};

export default QuickSort;
