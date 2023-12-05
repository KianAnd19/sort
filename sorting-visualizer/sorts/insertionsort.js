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

    async function insertionSort(callback) {
        isSorting = true;
    
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;
    
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
                drawArray();
                await new Promise(resolve => setTimeout(resolve, 25));
            }
            array[j + 1] = key;
            drawArray();
            await new Promise(resolve => setTimeout(resolve, 25));
        }
    
        isSorting = false;
        if (typeof callback === 'function') {
            callback();
        }
    }
    

    function highlightSorted() {
        let i = 0;
        (function highlight(i) {
            if (i < array.length) {
                drawArray(i + 1);
                setTimeout(() => highlight(i + 1), 50);
            }
        })(0);
    }

    startButton.addEventListener('click', () => {
        if (!isSorting) {
            insertionSort(highlightSorted);
        }
    });

    resetButton.addEventListener('click', initializeArray);

    initializeArray();
});
