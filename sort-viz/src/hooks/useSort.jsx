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


// Add this function to your src/hooks/useSort.js

export const mergeSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    await mergeSortRecursive(newArr, 0, newArr.length - 1, setArray, drawArray);
    highlightSorted(newArr, drawArray);
};

const mergeSortRecursive = async (array, start, end, setArray, drawArray) => {
    if (start >= end) return;

    const middle = Math.floor((start + end) / 2);
    await mergeSortRecursive(array, start, middle, setArray, drawArray);
    await mergeSortRecursive(array, middle + 1, end, setArray, drawArray);
    await merge(array, start, middle, end, setArray, drawArray);
};

const merge = async (array, start, middle, end, setArray, drawArray) => {
    let temp = [];
    let i = start, j = middle + 1;

    while (i <= middle && j <= end) {
        if (array[i] < array[j]) {
            temp.push(array[i++]);
        } else {
            temp.push(array[j++]);
        }
    }

    while (i <= middle) {
        temp.push(array[i++]);
    }

    while (j <= end) {
        temp.push(array[j++]);
    }

    for (i = start; i <= end; i++) {
        array[i] = temp[i - start];
        setArray([...array]);
        drawArray(array);
        await new Promise(resolve => setTimeout(resolve, 25));
    }
};

// Add this function to your src/hooks/useSort.js

export const heapSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    let n = newArr.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(newArr, n, i, setArray, drawArray);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [newArr[0], newArr[i]] = [newArr[i], newArr[0]];
        setArray([...newArr]);
        drawArray(newArr);

        // Call max heapify on the reduced heap
        await heapify(newArr, i, 0, setArray, drawArray);
    }

    highlightSorted(newArr, drawArray);
};

// To heapify a subtree rooted with node i which is an index in newArr[]
const heapify = async (array, n, i, setArray, drawArray) => {
    await new Promise(resolve => setTimeout(resolve, 10));
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < n && array[l] > array[largest]) {
        largest = l;
    }

    // If right child is larger than largest so far
    if (r < n && array[r] > array[largest]) {
        largest = r;
    }

    // If largest is not root
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        setArray([...array]);
        drawArray(array);

        // Recursively heapify the affected sub-tree
        await heapify(array, n, largest, setArray, drawArray);
    }
};


export const radixSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    const maxNum = Math.max(...newArr);
    let maxDigitCount = Math.max(...newArr).toString().length;

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < newArr.length; i++) {
            let digit = getDigit(newArr[i], k);
            digitBuckets[digit].push(newArr[i]);

            // Visualize the current state after placing each item in a bucket
            let tempArray = [].concat(...digitBuckets).concat(newArr.slice(i + 1));
            setArray([...tempArray]);
            drawArray(tempArray);
            await new Promise(resolve => setTimeout(resolve, 25));
        }

        // Combine the buckets
        newArr = [].concat(...digitBuckets);
    }

    highlightSorted(newArr, drawArray);
};

const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;



// Add this function to your src/hooks/useSort.js

export const bucketSort = async (array, setArray, drawArray, bucketSize = 5) => {
    if (array.length === 0) {
        return;
    }

    let min = Math.min(...array);
    let max = Math.max(...array);
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }

    // Distribute input array values into buckets and visualize
    for (let i = 0; i < array.length; i++) {
        let bucketIndex = Math.floor((array[i] - min) / bucketSize);
        buckets[bucketIndex].push(array[i]);
        await visualizeBuckets(buckets, setArray, drawArray); // New visualization step
    }

    // Sort buckets and concatenate results
    array = [];
    for (let bucket of buckets) {
        // Sort bucket
        bucket.sort((a, b) => a - b);

        // Concatenate bucket to main array and visualize
        array = array.concat(bucket);
        setArray([...array]);
        drawArray(array);
        await new Promise(resolve => setTimeout(resolve, 25));
    }

    highlightSorted(array, drawArray);
};

// Function to visualize the state of buckets
const visualizeBuckets = async (buckets, setArray, drawArray) => {
    let tempArray = [].concat(...buckets);
    setArray([...tempArray]);
    drawArray(tempArray);
    await new Promise(resolve => setTimeout(resolve, 25));
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
