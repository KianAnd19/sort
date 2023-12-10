/*****************************************************************************/
/************************  Insertion Sort   **********************************/
/*****************************************************************************/
export const insertionSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    const maxVal = Math.max(...newArr);

    for (let i = 1; i < newArr.length; i++) {
        let key = newArr[i];
        let j = i - 1;

        while (j >= 0 && newArr[j] > key) {
            newArr[j + 1] = newArr[j];
            j--;
            newArr[j + 1] = key;

            setArray(newArr.slice());
            drawArray(newArr);
            playSound(newArr[j + 1], maxVal); // Play sound for the current element
            await new Promise(resolve => setTimeout(resolve, 25));
        }
    }

    highlightSorted(newArr, drawArray);
};




/*****************************************************************************/
/************************  Selection Sort   **********************************/
/*****************************************************************************/
export const selectionSort = async (array, setArray, drawArray) => {
    const maxVal = Math.max(...array);
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
            playSound(array[i], maxVal);
            setArray(newArr.slice());
            drawArray(newArr);
            await new Promise(resolve => setTimeout(resolve, 25)); // Delay for visualization
        }
    }

    // Highlight the sorted array
    highlightSorted(newArr, drawArray);
};



/*****************************************************************************/
/*************************    Quick Sort   ***********************************/
/*****************************************************************************/
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
    let pivotValue = array[end];
    let pivotIndex = start;
    const maxVal = Math.max(...array);

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
            pivotIndex++;
            setArray([...array]);
            drawArray(array);
            playSound(array[i], maxVal); // Play sound based on the element's value
            await new Promise(resolve => setTimeout(resolve, 25));
        }
    }

    [array[pivotIndex], array[end]] = [array[end], array[pivotIndex]];
    setArray([...array]);
    drawArray(array);
    // playSound(array[pivotIndex], maxVal); // Play sound for pivot placement
    await new Promise(resolve => setTimeout(resolve, 25));

    return pivotIndex;
};




/*****************************************************************************/
/*************************   Bubble Sort   ***********************************/
/*****************************************************************************/
export const bubbleSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    let n = newArr.length;
    let isSorted = false;
    const maxVal = Math.max(...array);

    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < n - 1; i++) {
            if (newArr[i] > newArr[i + 1]) {
                [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
                isSorted = false;
                setArray([...newArr]);
                drawArray(newArr);
                playSound(newArr[i], maxVal); // Play sound based on the element's value
                await new Promise(resolve => setTimeout(resolve, 25));
            }
        }
        n--; // Reduce the number of iterations as the largest element is bubbled to the end
    }

    highlightSorted(newArr, drawArray); // Function to highlight the sorted array
};



/*****************************************************************************/
/*************************    Merge Sort   ***********************************/
/*****************************************************************************/
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
    const maxVal = Math.max(...array);

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
        playSound(array[i], maxVal); // Play sound based on the element's value
        await new Promise(resolve => setTimeout(resolve, 25));
    }
};



/*****************************************************************************/
/*************************    Heap Sort    ***********************************/
/*****************************************************************************/
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
    const maxVal = Math.max(...array);
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
        playSound(array[i], maxVal); // Play sound based on the element's value

        // Recursively heapify the affected sub-tree
        await heapify(array, n, largest, setArray, drawArray);
    }
};



/*****************************************************************************/
/*************************    Radix Sort   ***********************************/
/*****************************************************************************/
export const radixSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    const maxNum = Math.max(...newArr);
    let maxDigitCount = Math.max(...newArr).toString().length;
    const maxVal = Math.max(...array);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);

        for (let i = 0; i < newArr.length; i++) {
            let digit = getDigit(newArr[i], k);
            digitBuckets[digit].push(newArr[i]);

            // Visualize the current state after placing each item in a bucket
            let tempArray = [].concat(...digitBuckets).concat(newArr.slice(i + 1));
            setArray([...tempArray]);
            drawArray(tempArray);
            playSound(newArr[i], maxVal); // Play sound based on the element's value
            await new Promise(resolve => setTimeout(resolve, 25));
        }

        // Combine the buckets
        newArr = [].concat(...digitBuckets);
    }

    highlightSorted(newArr, drawArray);
};

const getDigit = (num, place) => Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;




/*****************************************************************************/
/*************************   Bucket Sort   ***********************************/
/*****************************************************************************/
export const bucketSort = async (array, setArray, drawArray, bucketSize = 5) => {
    const maxVal = Math.max(...array);
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
        playSound(array[i], maxVal);
        await visualizeBuckets(buckets, setArray, drawArray); // New visualization step
    }

    // Sort buckets and concatenate results
    array = [];
    for (let bucket of buckets) {
        bucket.sort((a, b) => a - b);

        for (let item of bucket) {
            array.push(item);
            playSound(item, maxVal); // Play sound for each element added back to array
            setArray([...array]);
            drawArray(array);
            await new Promise(resolve => setTimeout(resolve, 25));
        }
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


/*****************************************************************************/
/*************************    Shell Sort   ***********************************/
/*****************************************************************************/
export const shellSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    let n = newArr.length;
    const maxVal = Math.max(...array);

    // Start with a big gap, then reduce the gap
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i += 1) {
            let temp = newArr[i];

            // Shift earlier gap-sorted elements up until the correct location for newArr[i] is found
            let j;
            for (j = i; j >= gap && newArr[j - gap] > temp; j -= gap) {
                newArr[j] = newArr[j - gap];
                setArray([...newArr]);
                drawArray(newArr);
                await new Promise(resolve => setTimeout(resolve, 25));
            }

            // Put temp (the original newArr[i]) in its correct location
            newArr[j] = temp;
            setArray([...newArr]);
            drawArray(newArr);
            playSound(newArr[j], maxVal); // Play sound based on the element's value
            await new Promise(resolve => setTimeout(resolve, 25));
        }
    }

    highlightSorted(newArr, drawArray);
};




/*****************************************************************************/
/************************   Counting Sort   **********************************/
/*****************************************************************************/
export const countingSort = async (array, setArray, drawArray) => {
    const maxVal = Math.max(...array);
    let newArr = [...array];
    let max = Math.max(...newArr);
    let min = Math.min(...newArr);
    let range = max - min + 1;
    let count = Array.from({ length: range }, () => 0);
    let output = Array.from({ length: newArr.length }, () => 0);

    // Store the count of each element
    for (let i = 0; i < newArr.length; i++) {
        count[newArr[i] - min]++;
    }

    // Store the cumulative count of each array
    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    // Find the index of each element of the original array in count array, and
    // place the elements in output array
    for (let i = newArr.length - 1; i >= 0; i--) {
        output[count[newArr[i] - min] - 1] = newArr[i];
        count[newArr[i] - min]--;
        setArray([...output]);
        drawArray(output);
        playSound(output[i], maxVal); // Play sound based on the element's value
        await new Promise(resolve => setTimeout(resolve, 25));
    }
    
    highlightSorted(output, drawArray);
};

/*****************************************************************************/
/*************************   Random Sort   ***********************************/
/*****************************************************************************/
export const randomSort = async (array, setArray, drawArray) => {
    let newArr = [...array];
    const maxVal = Math.max(...array);

    // Function to check if the array is sorted
    const isSorted = (arr) => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                return false;
            }
        }
        return true;
    };

    // Shuffle the array until it is sorted
    while (!isSorted(newArr)) {
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        setArray([...newArr]);
        drawArray(newArr);
        playSound(newArr[0], maxVal); // Play sound based on the element's value
        await new Promise(resolve => setTimeout(resolve, 25));
    }

    highlightSorted(newArr, drawArray);
};

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playSound = (value, maxVal) => {
    const oscillator = audioCtx.createOscillator();
    oscillator.type = 'sine';
    const maxFrequency = 1000;
    const frequency = (value / maxVal) * maxFrequency;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    oscillator.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1); // Sound duration of 100ms
};




const highlightSorted = async (array, drawArray) => {
    const maxVal = Math.max(...array);
    for (let i = 0; i < array.length; i++) {
        drawArray(array, i + 1);
        playSound(array[i], maxVal); // Play sound based on the element's value
        await new Promise(resolve => setTimeout(resolve, 25));
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
