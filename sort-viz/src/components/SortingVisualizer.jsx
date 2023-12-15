import React, { useState, useEffect, useRef, useContext } from 'react';
import { AudioContext } from '../AudioContext';


const SortingVisualizer = ({ sortAlgorithm }) => {
    const [array, setArray] = useState([]);
    const arrayRef = useRef(array);
    const canvasRef = useRef(null);
    const [numberOfElements, setNumberOfElements] = useState(50); // Default number of elements
    const { isMuted, setIsMuted, playSound } = useContext(AudioContext);


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
        sortAlgorithm(array, setArray, drawArray, playSound);
    };

    const pauseSorting = () => {

    }

    const getMuted = () => {
        return isMuted;
    }

    return (
        <div className="flex flex-wrap justify-left items-center p-4">
            {/* -32 to offset the padding of the canvas */}
            <canvas ref={canvasRef} width={window.innerWidth-32} height={300}></canvas>
    
            <div className="flex flex-wrap justify-left items-left space-x-5 mt-4">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={startSorting}>
                    Start Sorting
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={pauseSorting}>
                    Pause Sorting
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={initializeArray}>
                    Reset
                </button>
                <div className="flex items-center m-3">
                    <input 
                        type="range" 
                        min="5" 
                        max="200" 
                        value={numberOfElements} 
                        onChange={(e) => {
                            setNumberOfElements(Number(e.target.value))
                            initializeArray();
                        }}
                        className="mx-2"
                    />
                    <label className="text-sm font-medium text-gray-900">Elements</label>
                </div>
                <div className="flex items-center ml-2 m-3 ">
                    <input 
                        type="checkbox" 
                        checked={isMuted} 
                        onChange={() => setIsMuted(!isMuted)} 
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900">Mute</label>
                </div>
            </div>
        </div>
    );     
};

export default SortingVisualizer;
