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

export const selectionSort = async (array, setArray, drawArray) => {
    let newArr = [...array]; // Create a copy of the array

    for (let i = 0; i < newArr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[j] < newArr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [newArr[i], newArr[minIndex]] = [newArr[minIndex], newArr[i]];
            setArray(newArr.slice());
            drawArray(newArr);
            await new Promise(resolve => setTimeout(resolve, 25)); // Delay for visualization
        }
    }

    // Highlight the sorted array
    highlightSorted(newArr, drawArray);
};

// Add this function to your src/hooks/useSort.js

export const quickSort = async (array, setArray, drawArray, start = 0, end = array.length - 1, isTopLevel = true) => {
    if (start >= end) {
        if (isTopLevel) {
            // Call highlightSorted only after the top-level call completes
            highlightSorted(array, drawArray);
        }
        return;
    }

    let index = await partition(array, start, end, setArray, drawArray);
    await Promise.all([
        quickSort(array, setArray, drawArray, start, index - 1, false),
        quickSort(array, setArray, drawArray, index + 1, end, false)
    ]);

    if (isTopLevel) {
        highlightSorted(array, drawArray);
    }
};


const partition = async (array, start, end, setArray, drawArray) => {
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
            setArray([...array]);
            drawArray(array);
            await new Promise(resolve => setTimeout(resolve, 25));
        }
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    setArray([...array]);
    drawArray(array);
    await new Promise(resolve => setTimeout(resolve, 25));

    return pivotIndex;
};

// Add this function to your src/hooks/useSort.js

export const bubbleSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    let n = newArr.length;
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < n - 1; i++) {
            if (newArr[i] > newArr[i + 1]) {
                [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
                isSorted = false;
                setArray([...newArr]);
                drawArray(newArr);
                await new Promise(resolve => setTimeout(resolve, 25));
            }
        }
        n--; // Reduce the number of iterations as the largest element is bubbled to the end
    }

    highlightSorted(newArr, drawArray); // Function to highlight the sorted array
};


const highlightSorted = async (array, drawArray) => {
    for (let i = 0; i < array.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 10));
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
