import React, { useState, useEffect, useRef } from 'react';

const SortingVisualizer = ({ sortAlgorithm }) => {
    const [array, setArray] = useState([]);
    const arrayRef = useRef(array);
    const canvasRef = useRef(null);

    useEffect(() => {
        arrayRef.current = array;
    }, [array]);

    useEffect(() => {
        initializeArray();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleResize = () => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        drawArray(arrayRef.current); // Use arrayRef here
    };

    const initializeArray = () => {
        const totalBars = 50;
        const maxHeight = 300;
        const newArray = Array.from({ length: totalBars }, (_, i) => Math.floor((i / totalBars) * maxHeight));

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

        const barWidth = canvas.width / arr.length;

        arr.forEach((value, index) => {
            ctx.fillStyle = index <= sortedIndex ? 'green' : 'blue';
            ctx.fillRect(index * barWidth, canvas.height - value, barWidth - 2, value);
        });
    };

    const startSorting = () => {
        sortAlgorithm(array, setArray, drawArray);
    };

    return (
        <div>
            <canvas ref={canvasRef} width={window.innerWidth} height={300}></canvas>
            <button className="bg-green-500 rounded-md px-1 m-3" onClick={startSorting}>Start Sorting</button>
            <button className="bg-red-500 rounded-md px-1 m-3" onClick={initializeArray}>Reset</button>
        </div>
    );
};

export default SortingVisualizer;
