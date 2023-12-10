import React, { useState, useEffect, useRef } from 'react';


const SortingVisualizer = ({ sortAlgorithm }) => {
    const [array, setArray] = useState([]);
    const arrayRef = useRef(array);
    const canvasRef = useRef(null);
    const [numberOfElements, setNumberOfElements] = useState(50); // Default number of elements

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
        const maxHeight = 300;
        const newArray = Array.from({ length: numberOfElements }, (_, i) => Math.floor((i / numberOfElements) * maxHeight));

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

    const pauseSorting = () => {

    }

    return (
        <div>
            <canvas ref={canvasRef} width={window.innerWidth} height={300}></canvas>
            <button className="m-3 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={startSorting}>
                Start Sorting
            </button>
            <button className="m-3 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={pauseSorting}>
                Pause Sorting
            </button>
            <button className="m-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={initializeArray}>
                Reset
            </button>
            <label className="m-3">Number of Elements: </label>
            <input 
                type="range" 
                min="5" 
                max="200" 
                value={numberOfElements} 
                className='m-3'
                onChange={(e) => {
                    setNumberOfElements(Number(e.target.value))
                    initializeArray();
                }}
            />

        </div>
    );
};

export default SortingVisualizer;
