import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-400 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-center">
                <h1 className="text-3xl font-bold">Sorting Algorithm Visualizer</h1>
                {/* Navigation Links or Logo can be added here */}
                <nav>
                    {/* <Link to="/" className="text-white px-3 py-2 rounded hover:bg-blue-700">Home</Link> */}
                    {/* Add more navigation links if needed */}
                </nav>
            </div>
        </header>
    );
};

export default Header;
