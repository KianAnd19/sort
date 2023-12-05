// src/components/SortingVisualizer.jsx
import React, { useState, useEffect, useRef } from 'react';

const SortingVisualizer = ({ sortAlgorithm }) => {
    const [array, setArray] = useState([]);
    const canvasRef = useRef(null);

    useEffect(() => {
        initializeArray();
    }, []);

    const initializeArray = () => {
        const totalBars = 50;
        const maxHeight = 300;
        const newArray = Array.from({ length: totalBars }, (_, i) => Math.floor((i / totalBars) * maxHeight));
        // Shuffle the array
        for (let i = newArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[randomIndex]] = [newArray[randomIndex], newArray[i]];
        }
        setArray(newArray);
        drawArray(newArray);
    };

    const drawArray = (arr, sortedIndex = -1) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        arr.forEach((value, index) => {
            ctx.fillStyle = index <= sortedIndex ? 'green' : 'blue';
            ctx.fillRect(index * (canvas.width / arr.length), canvas.height - value, (canvas.width / arr.length) - 2, value);
        });
    };

    const startSorting = () => {
        sortAlgorithm(array, setArray, drawArray);
    };

    return (
        <div>
            <canvas ref={canvasRef} width={800} height={300}></canvas>
            <button onClick={startSorting}>Start Sorting</button>
            <button onClick={initializeArray}>Reset</button>
        </div>
    );
};

export default SortingVisualizer;
