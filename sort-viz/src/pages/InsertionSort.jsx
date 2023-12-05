// src/pages/BubbleSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { insertionSort } from '../hooks/useSort';

const InsertionSort = () => {
  return (
    <div>
      <h1>Bubble Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={insertionSort} />
    </div>
  );
};

export default InsertionSort;
