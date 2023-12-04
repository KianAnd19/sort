import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('sortingCanvas');
  const ctx = canvas.getContext('2d');

  let array = [];
  let sorting = false;

  function initializeArray() {
    const totalBars = 50;
    const maxHeight = canvas.height;
    array = Array.from({ length: totalBars }, (_, i) => (i / totalBars) * maxHeight);

    // Optionally, shuffle the array here if you want the bars to start in a random order
    array.sort(() => Math.random() - 0.5);

    drawArray();
}


function drawArray() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  array.forEach((value, index) => {
      ctx.fillStyle = 'blue';
      ctx.fillRect(index * (canvas.width / array.length), canvas.height - value, (canvas.width / array.length) - 2, value);
  });
}

function bubbleSort() {
  let n = array.length;
  let swapped;
  let i = 0;
  (function iterate(i) {
      if (i < n) {
          swapped = false;
          (function innerIterate(j) {
              if (j < n - i - 1) {
                  if (array[j] > array[j + 1]) {
                      [array[j], array[j + 1]] = [array[j + 1], array[j]];
                      swapped = true;
                  }
                  drawArray();
                  setTimeout(() => innerIterate(j + 1), 0);
              } else if (swapped) {
                  setTimeout(() => iterate(i + 1), 0);
              }
          })(0);
      }
  })(0);
}


  document.getElementById('startButton').addEventListener('click', () => {
      if (!sorting) {
          sorting = true;
          bubbleSort();
      }
  });

  document.getElementById('resetButton').addEventListener('click', () => {
      sorting = false;
      initializeArray();
  });

  initializeArray(); // Initialize array on page load
});
