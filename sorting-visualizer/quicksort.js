document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('sortingCanvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');

    let array = [];
    let isSorting = false;

    function initializeArray() {
        const totalBars = 50;
        const maxHeight = canvas.height;
        array = Array.from({ length: totalBars }, (_, i) => (i / totalBars) * maxHeight);
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

    let quickSortDepth = 0;

    async function quickSort(left = 0, right = array.length - 1, isInitialCall = false) {
        quickSortDepth++;
        if (left < right) {
            let pivotIndex = await partition(left, right);
            await quickSort(left, pivotIndex - 1);
            await quickSort(pivotIndex + 1, right);
        }
        quickSortDepth--;
    
        if (isInitialCall && quickSortDepth === 0) {
            highlightSorted();
        }
    }
    

    

    async function partition(left, right) {
        let pivotIndex = right;
        let pivotValue = array[pivotIndex];
        let i = left;

        for (let j = left; j < right; j++) {
            if (array[j] < pivotValue) {
                [array[i], array[j]] = [array[j], array[i]];
                i++;
                drawArray();
                await new Promise(resolve => setTimeout(resolve, 10));
            }
        }

        [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
        drawArray();
        await new Promise(resolve => setTimeout(resolve, 10));
        
        return i;
    }

    function highlightSorted() {
        let i = 0;
        (function highlight(i) {
            if (i < array.length) {
                drawArray(i + 1);
                setTimeout(() => highlight(i + 1), 0);
            }
        })(0);
    }

    startButton.addEventListener('click', () => {
        if (!isSorting) {
            isSorting = true;
            quickSortDepth = 0;
            quickSort(0, array.length - 1, true).then(() => {
                isSorting = false;
            });
        }
    });
    
    
    

    resetButton.addEventListener('click', () => {
        if (!isSorting) {
            initializeArray();
        }
    });
    

    initializeArray();
});
