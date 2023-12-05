// src/hooks/useSort.js
export const insertionSort = async (array, setArray, drawArray) => {
    let newArr = [...array]; // Create a copy of the array

    for (let i = 1; i < newArr.length; i++) {
        let key = newArr[i];
        let j = i - 1;

        while (j >= 0 && newArr[j] > key) {
            newArr[j + 1] = newArr[j];
            j--;
            newArr[j + 1] = key;
            // Update the array in state and redraw the canvas for each step
            setArray(newArr.slice());
            drawArray(newArr);
            await new Promise(resolve => setTimeout(resolve, 25)); // Delay for visualization
        }
    }

    // Once sorting is done, highlight the sorted array
    highlightSorted(newArr, drawArray);
};

const highlightSorted = async (array, drawArray) => {
    for (let i = 0; i < array.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        drawArray(array, i + 1);
    }
};

// Modify drawArray function to highlight the sorted part
const drawArray = (arr, sortedIndex = arr.length) => {
    const canvas = document.getElementById('sortingCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    arr.forEach((value, index) => {
        ctx.fillStyle = index < sortedIndex ? 'green' : 'blue';
        ctx.fillRect(index * (canvas.width / arr.length), canvas.height - value, (canvas.width / arr.length) - 2, value);
    });
};
