// src/pages/SelectionSortPage.jsx
import React from 'react';
import SortingVisualizer from '../components/SortingVisualizer';
import { selectionSort } from '../hooks/useSort';

const SelectionSort = () => {
  return (
    <div>
      <h1>Selection Sort Visualizer</h1>
      <SortingVisualizer sortAlgorithm={selectionSort} />
    </div>
  );
};

export default SelectionSort;
