// src/pages/BubbleSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { bubbleSort } from '../hooks/useSort';

const BubbleSort = () => {
  return (
    <div>
      <h1>Bubble Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={bubbleSort} />
    </div>
  );
};

export default BubbleSort;
