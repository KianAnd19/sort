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

    function highlightSorted() {
        let i = 0;
        (function highlight(i) {
            if (i < array.length) {
                drawArray(i + 1);
                setTimeout(() => highlight(i + 1), 0); // Adjust delay as needed
            }
        })(0);
    }
    
    function drawArray(sortedCount = 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        array.forEach((value, index) => {
            ctx.fillStyle = index < sortedCount ? 'green' : 'blue';
            ctx.fillRect(index * (canvas.width / array.length), canvas.height - value, (canvas.width / array.length) - 2, value);
        });
    }

    async function selectionSort() {
        if (isSorting) return;
        isSorting = true;

        let n = array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (array[j] < array[minIndex]) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
                drawArray();
                await new Promise(resolve => setTimeout(resolve, 25));
            }
        }

        isSorting = false;

        highlightSorted();  
    }

    startButton.addEventListener('click', selectionSort);
    resetButton.addEventListener('click', initializeArray);

    initializeArray();
});
